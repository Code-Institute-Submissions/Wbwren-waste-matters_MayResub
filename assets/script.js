// module aliases
let Engine = Matter.Engine,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
let engine = Engine.create();

// create a renderer
let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false, // wireframes must be disabled to allow the custom texture on the compactor
    }
});

// create the ground
let groundLeft = Bodies.rectangle(208, 570, 415, 60, { isStatic: true });
let groundCenter = Bodies.rectangle(490, 570, 100, 60, { isStatic: true });
let groundRight = Bodies.rectangle(670, 570, 260, 60, { isStatic: true });

let brick = Bodies.rectangle(50, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/images/brick.png",
			xScale: .11,
			yScale: .11
		}
}
});

let brick1 = Bodies.rectangle(150, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/images/brick.png",
			xScale: .11,
			yScale: .11
		}
}
});

let brick2 = Bodies.rectangle(250, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/images/brick.png",
			xScale: .11,
			yScale: .11
		}
}
});

let brick3 = Bodies.rectangle(350, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/images/brick.png",
			xScale: .11,
			yScale: .11
		}
}
});

let brick4 = Bodies.rectangle(450, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/images/brick.png",
			xScale: .11,
			yScale: .11
		}
}
});

let brick5 = Bodies.rectangle(550, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/images/brick.png",
			xScale: .11,
			yScale: .11
		}
}
});

let brick6 = Bodies.rectangle(650, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/images/brick.png",
			xScale: .11,
			yScale: .11
		}
}
});

let brick7 = Bodies.rectangle(750, 588, 0.01, 0.01, { 
	isStatic: true,
	render: {
		sprite: {
			texture: "assets/images/brick.png",
			xScale: .11,
			yScale: .11
		}
}
});

// add polystyrene compactor object to the canvas
let compactor = Bodies.rectangle(400, 410, .01, .01, {
		isStatic: true,
		density: 0.1,
		restitution: 0,
		friction: 0.1,
		frictionAir: 0.01,
		frictionStatic: 0.5,
        render: {
            sprite: {
                texture: "assets/images/prwm370.png",
                xScale: .75,
                yScale: .75
            }
        },
		collisionFilter: {
			group: 0,
			category: 1,
			mask: 255
		},
		fixtures: [
			{
				label: "",
				isSensor: false,
				vertices: [
					[ { x:363, y:284 }, { x:362, y:239 }, { x:314, y:239 }, { x:322, y:284 } ],
					[ { x:565, y:148 }, { x:564, y:167 }, { x:577, y:167 }, { x:576, y:148 } ],
					[ { x:635, y:344 }, { x:635, y:313 }, { x:511, y:312 }, { x:563, y:344 } ],
					[ { x:563, y:344 }, { x:511, y:312 }, { x:322, y:314 }, { x:562, y:373 } ],
					[ { x:373, y:243 }, { x:408, y:312 }, { x:511, y:312 }, { x:378, y:162 }, { x:371, y:161 } ],
					[ { x:102, y:314 }, { x:46, y:365 }, { x:562, y:373 }, { x:322, y:314 } ],
					[ { x:314, y:239 }, { x:314, y:314 }, { x:322, y:314 }, { x:322, y:284 } ],
					[ { x:385, y:122 }, { x:378, y:122 }, { x:371, y:161 }, { x:378, y:162 } ],
					[ { x:533, y:122 }, { x:540, y:162 }, { x:547, y:162 }, { x:540, y:122 } ],
					[ { x:546, y:249 }, { x:547, y:162 }, { x:528, y:274 } ],
					[ { x:595, y:172 }, { x:577, y:167 }, { x:555, y:170 }, { x:554, y:274 }, { x:596, y:283 } ],
					[ { x:564, y:167 }, { x:555, y:170 }, { x:577, y:167 } ],
					[ { x:596, y:283 }, { x:554, y:274 }, { x:528, y:274 }, { x:527, y:282 } ],
					[ { x:527, y:282 }, { x:528, y:274 }, { x:511, y:312 } ],
					[ { x:528, y:274 }, { x:547, y:162 }, { x:378, y:162 }, { x:511, y:312 } ]
				]
			}
		]
	})

let greenPipe = Bodies.rectangle(200, 100, .01, .01, {
	isStatic: true,
	render: {
		visible: true,
		sprite: {
			texture: "assets/images/green-pipe.png",
			xScale: .3,
			yScale: .3
		}
	},
})

let polystyreneBoxes = []
let polystyreneBox;

// function to generate random sized polystyrene blocks
$("#spawnBtn").click(function() {
	// generate a random number for the length and width of the polystyrene blocks
	let randomWidthValue = Math.floor((Math.random()*40) + 20); // a value of 10 is added to the number to ensure the blocks are large enough to click easily
	let randomLengthValue = Math.floor((Math.random()*90) + 20);

	// generate a random number for the x-axis coordinate in which the block will be created
	let randomXAxisValue = Math.floor((Math.random()*100) + 150);

	// the image overlay of the polystyrene blocks needs to be scaled down to the size of the block created, the ratio is 1:1000
	let xAxisImageScaleValue = randomWidthValue/1000;
	let yAxisImageScaleValue = randomLengthValue/1000;

	polystyreneBox = Bodies.rectangle(randomXAxisValue, 100, randomWidthValue, randomLengthValue, {
		isStatic: false,
		density: 0.1,
		restitution: 0,
		friction: 0.1,
		frictionAir: 0.01,
		frictionStatic: 0.5,

        render: {
            sprite: {
                texture: "assets/images/polystyrene.png",
                xScale: xAxisImageScaleValue,
                yScale: yAxisImageScaleValue
            }
        },
		collisionFilter: {
			group: 0,
			category: 1,
			mask: 255
		},
		fixtures: [
			{
				isSensor: false,
				vertices: [
					[ { x:1026, y:1026 }, { x:1025, y:0 }, { x:2, y:0 }, { x:2, y:1025 } ]
				]
			}
		]
	})
	World.add(engine.world, [polystyreneBox, compactorForeground, brick2, brick3, brick4, brick5]);
	World.remove(engine.world, [greenPipe])
	polystyreneBoxes.push(polystyreneBox)
	console.log(polystyreneBoxes)
})



$('#resetBtn').on('click', function(){
	for (polystyreneBox in polystyreneBoxes) {
		World.remove(engine.world, polystyreneBoxes[polystyreneBox]);
	}
})

let mouse = Mouse.create(render.canvas),
	mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: 0.2,
			render: {
				visible: true
			}
		}
	});

let structure1 = Bodies.rectangle(400, 430, 40, 40, {
	isStatic: true,
	render: {
		visible: false
	}
})

let structure2 = Bodies.rectangle(320, 491.5, 190, 40, {
	isStatic: true,
	render: {
		visible: false
	}
})

let structure21 = Bodies.rectangle(580, 491.5, 70, 40, {
	isStatic: true,
	render: {
		visible: false
	}
})

let structure22 = Bodies.rectangle(490, 491.5, 80, 40, {
	isStatic: true,
	render: {
		visible: false
	}
})

let structure3 = Bodies.trapezoid(227, 497.5, 100, 40, .9, {
	isStatic: true,
	render: {
		visible: false
	}
})

let structure4 = Bodies.rectangle(427, 377, 10, 100, {
	isStatic: true,
	render: {
		visible: false
	}
})

let structure5 = Bodies.rectangle(546, 377, 10, 100, {
	isStatic: true,
	render: {
		visible: false
	}
})

let structure6 = Bodies.rectangle(570, 413, 50, 105, {
	isStatic: true,
	render: {
		visible: false
	}
})

let structure7 = Bodies.rectangle(540, 443, 10, 60, {
	isStatic: true,
	render: {
		visible: false
	},
})
Matter.Body.rotate(structure7, .5);

let structure8 = Bodies.rectangle(440, 443, 10, 60, {
	isStatic: true,
	render: {
		visible: false
	},
})
Matter.Body.rotate(structure8, -.5);

let compactorForeground = Bodies.rectangle(400, 471, .01, .01, {
	isStatic: true,
	render: {
		visible: true,
		sprite: {
			texture: "assets/images/prwm370-cropped.png",
			xScale: .75,
			yScale: .75
		}
	},
})

// add all of the bodies to the world
World.add(engine.world, [groundLeft, groundCenter, groundRight, compactor, 
mouseConstraint, structure1, structure2, structure21, structure22, structure3, 
structure4, structure5, structure6, structure7, structure8, greenPipe, brick, brick1, brick2, brick3, brick4, brick5, brick6, brick7]);



// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);