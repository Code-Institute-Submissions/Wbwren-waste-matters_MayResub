// Module aliases
const Engine = Matter.Engine,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
    Render = Matter.Render,
    World = Matter.World,
	Body = Matter.Body,
    Bodies = Matter.Bodies;

// Create an engine
const engine = Engine.create();

// Create a renderer
// Wireframes must be disabled to allow the custom textures
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false, 
    }
});

// Create the ground
let groundLeft = Bodies.rectangle(208, 570, 415, 60, { isStatic: true });
let groundCenter = Bodies.rectangle(490, 570, 100, 60, { isStatic: true });
let groundRight = Bodies.rectangle(670, 570, 260, 60, { isStatic: true });

// Add brick texture to the ground
let brick0 = Bodies.rectangle(50, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/brick.png",
			xScale: 0.11,
			yScale: 0.11
		}
}
});

let brick1 = Bodies.rectangle(150, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/brick.png",
			xScale: 0.11,
			yScale: 0.11
		}
}
});

let brick2 = Bodies.rectangle(250, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/brick.png",
			xScale: 0.11,
			yScale: 0.11
		}
}
});

let brick3 = Bodies.rectangle(350, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/brick.png",
			xScale: 0.11,
			yScale: 0.11
		}
}
});

let brick4 = Bodies.rectangle(450, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/brick.png",
			xScale: 0.11,
			yScale: 0.11
		}
}
});

let brick5 = Bodies.rectangle(550, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/brick.png",
			xScale: 0.11,
			yScale: 0.11
		}
}
});

let brick6 = Bodies.rectangle(650, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/brick.png",
			xScale: 0.11,
			yScale: 0.11
		}
}
});

let brick7 = Bodies.rectangle(750, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/brick.png",
			xScale: 0.11,
			yScale: 0.11
		}
}
});

/*
When the blocks are 'compacted' they fall through the map, this black triangle
hides them from view as they fall
*/
let blackRectangle = Bodies.rectangle(490, 800, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/img/black.png",
			xScale: 0.7,
			yScale: 2.5
		},
}
});

// Add polystyrene compactor object to the canvas
let compactor = Bodies.rectangle(400, 410, 0.01, 0.01, {
		isStatic: true,
		density: 0.1,
		restitution: 0,
		friction: 0.1,
		frictionAir: 0.01,
		frictionStatic: 0.5,
        render: {
            sprite: {
                texture: "assets/img/prwm370.png",
                xScale: 0.75,
                yScale: 0.75
            }
        },
		collisionFilter: {
			group: 0,
			category: 1,
			mask: 255
		},
	});

let greenPipe = Bodies.rectangle(480, 50, 0.01, 0.01, {
	isStatic: true,
	render: {
		visible: true,
		sprite: {
			texture: "assets/img/green-pipe.png",
			xScale: 0.3,
			yScale: 0.3
		}
	},
});

let polystyreneBoxes = [];
let polystyreneBox;

// Function to generate random sized polystyrene blocks
$("#spawnBtn").click(function() {
	/* 
	Generate a random number for the length and width of the polystyrene
	blocks. A value of 10 is added to the number to ensure the blocks are large
	enough to click easily
	*/
	let randomWidthValue = Math.floor((Math.random()*40) + 20); 
	let randomLengthValue = Math.floor((Math.random()*90) + 20);

	/*
	Generate a random number for the x-axis coordinate in which the block
	will be created
	*/
	let randomXCord = Math.floor((Math.random()*100) + 450);

	/*
	The image overlay of the polystyrene blocks needs to be scaled down to
	the size of the block created, the ratio is 1:1000
	*/
	let xAxisimgcaleValue = randomWidthValue/1000;
	let yAxisimgcaleValue = randomLengthValue/1000;

	polystyreneBox = Bodies.rectangle(randomXCord, 100, randomWidthValue,
		randomLengthValue, {
		isStatic: false,
		density: 0.1,
		restitution: 0,
		friction: 0.1,
		frictionAir: 0.01,
		frictionStatic: 0.5,

        render: {
            sprite: {
                texture: "assets/img/polystyrene.png",
                xScale: xAxisimgcaleValue,
                yScale: yAxisimgcaleValue
            }
        },

		collisionFilter: {
			group: 0,
			category: 1,
			mask: 255
		},
	});

	// Re-add necessary components to give 3D effect
	World.add(engine.world, [
		polystyreneBox, blackRectangle, compactorForeground, greenPipe, brick2,
		brick3, brick4, brick5
	]);

	World.remove(engine.world, [greenPipe, brick2, brick3, brick4, brick5]);
	polystyreneBoxes.push(polystyreneBox);
});

$('#resetBtn').on('click', function(){
	window.location.reload();
});

// Create mouse/click dragging function to world objects
let mouse = Mouse.create(render.canvas),
	mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: 0.2,
			render: {
				visible: true
			}
		}
	}
);

/*
The compactor is only an image on the canvas. To give it structure, shapes are
created to match each component
*/
let powerGaugeComponent = Bodies.rectangle(400, 430, 40, 40, {
	isStatic: true,
	render: {
		visible: false
	}
});

let shaftUpperComponent = Bodies.trapezoid(312, 476.5, 200, 10, 0.1, {
	isStatic: true,
	render: {
		visible: false
	}
});

let shaftLowerComponent = Bodies.trapezoid(294, 503.5, 220, 10, 0.09, {
	isStatic: true,
	render: {
		visible: false
	}
});

let engineComponent = Bodies.rectangle(580, 491.5, 70, 40, {
	isStatic: true,
	render: {
		visible: false
	}
});

let leftContainerComponent = Bodies.rectangle(427, 377, 10, 100, {
	isStatic: true,
	render: {
		visible: false
	}
});

let rightContainerComponent = Bodies.rectangle(546, 377, 10, 100, {
	isStatic: true,
	render: {
		visible: false
	}
});

let powerSwitchComponent = Bodies.rectangle(570, 413, 50, 105, {
	isStatic: true,
	render: {
		visible: false
	}
});

let trapDoorComponent = Bodies.rectangle(490, 491.5, 80, 40, {
	isStatic: true,
	render: {
		visible: false
	}
});

let rightTrapDoor = Bodies.rectangle(540, 443, 10, 60, {
	isStatic: true,
	render: {
		visible: false
	},
});
Matter.Body.rotate(rightTrapDoor, 0.5);

let leftTrapDoor = Bodies.rectangle(440, 443, 10, 60, {
	isStatic: true,
	render: {
		visible: false
	},
});
Matter.Body.rotate(leftTrapDoor, -0.5);

// An additional compactor image is added to give a 3D effect
let compactorForeground = Bodies.rectangle(400, 471, 0.01, 0.01, {
	isStatic: true,
	render: {
		visible: true,
		sprite: {
			texture: "assets/img/prwm370-cropped.png",
			xScale: 0.75,
			yScale: 0.75
		}
	},
});

let compactedPolystyrene = Bodies.rectangle(320, 490, 150, 15, {
	render: {
		visible: true,
		sprite: {
			texture: "assets/img/polystyrene.png",
			xScale: 0.146,
			yScale: 0.014
		}
  },
	density: 0.0006,
	restitution: 0,
	friction: 0.0006,
	frictionAir: 0.002,
	frictionStatic: 0.01,
	isStatic: false
	
});

// create information arrow
let arrow = Bodies.rectangle(90, 400, 150, 150, {
	render: {
		visible: true,
		sprite: {
			texture: "assets/img/arrow.png",
			xScale: 0.19,
			yScale: 0.19
		}
	},
	isStatic: true
});

// Function to turn on compactor
$('#compactBtn').on('click', function () {
	World.remove(engine.world, [
		groundCenter, trapDoorComponent, rightTrapDoor, leftTrapDoor,
		mouseConstraint
	]);
	World.add(engine.world, [arrow]);
	Body.setVelocity(compactedPolystyrene, { x: -2.7, y: 0 });

	$('#spawnBtn').css('pointer-events', 'none');
	$('#compactBtn').css('pointer-events', 'none');
});

// Add all of the bodies to the world
World.add(engine.world, [
	groundLeft, groundCenter, groundRight, compactedPolystyrene, compactor, 
	mouseConstraint, powerGaugeComponent, shaftUpperComponent,
	shaftLowerComponent, engineComponent, trapDoorComponent,
	leftContainerComponent, rightContainerComponent, powerSwitchComponent,
	rightTrapDoor, leftTrapDoor, greenPipe, brick0, brick1, brick2, brick3,
	brick4, brick5, brick6, brick7
]);

// Run the engine
Engine.run(engine);

// Run the renderer
Render.run(render);