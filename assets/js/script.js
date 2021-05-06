/*jshint esversion: 6 */
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

// User instruction modal
// Credit to Web Dev Simplified
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

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

let greenPipe = Bodies.rectangle(480, 0, 0.01, 0.01, {
    isStatic: true,
    render: {
        visible: true,
        sprite: {
            texture: "assets/img/green-pipe.png",
            xScale: 0.35,
            yScale: 0.35
        }
    },
});


let polystyreneBoxes = [];
    // Function to generate random sized polystyrene blocks
function spawnBlock() {
    /* 
    Generate a random number for the length and width of the polystyrene
    blocks. A value of 10 is added to the number to ensure the blocks are large
    enough to click easily
    */
    let randomWidthValue = Math.floor((Math.random() * 20) + 10);
    let randomLengthValue = Math.floor((Math.random() * 45) + 10);

    /*
    Generate a random number for the x-axis coordinate in which the block
    will be created
    */
    let randomXCord = Math.floor((Math.random() * 100) + 450);

    /*
    The image overlay of the polystyrene blocks needs to be scaled down to
    the size of the block created, the ratio is 1:1000
    */
    let xAxisimgcaleValue = randomWidthValue / 1000;
    let yAxisimgcaleValue = randomLengthValue / 1000;

    polystyreneBox = Bodies.rectangle(randomXCord, 20, randomWidthValue,
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

    polystyreneBoxes.push(polystyreneBox);}

let boxesOutOfBounds = new Set();

// Detect collisions and check if block is out of bounds
checkCoordinates = () => {
    for (let i in polystyreneBoxes) {
        if (polystyreneBoxes[i].position.x < 420) {
            boxesOutOfBounds.add(polystyreneBoxes[i].id);
        } else if (polystyreneBoxes[i].position.x > 551) {
            one = true;
            boxesOutOfBounds.add(polystyreneBoxes[i].id);
        }
    }
};

let lives = 3;
checkLives = () => {
    if (boxesOutOfBounds.size == 1) {
        lives = 2;
    } else if (boxesOutOfBounds.size == 2) {
        lives = 1;
    } else if (boxesOutOfBounds.size >= 3) {
        lives = 0;
    }
};

lifeLost = () => {
    if (lives == 2) {
        $('#livesContainer').html(
            `
			Lives: <i class="fas fa-heart"></i> <i class="fas fa-heart"></i>
			`
        );
    } else if (lives == 1) {
        $('#livesContainer').html(
            `
			Lives: <i class="fas fa-heart"></i>
			`
        );
    } else if (lives == 0) {
        $('#livesContainer').html(
            `
			Lives:
			`
        );
        $('#winLose').css('display', 'inline-block');
        $('#spawnBtn').css('display', 'none');
        $('#compactBtn').css('display', 'none');
    }
};

// Call coordinate and life checker functions every second
setInterval(function() { checkCoordinates(), checkLives(), lifeLost(); }, 1000);

let score = 0;

function incrementScore() {
    score++;
    $('#scoreContainer').html(
        `
    Score: ${score}
    `
    );
}

let value = 0;
let interval;

function update() {
    value++;
    if (value % 2 == 0) {
        spawnBlock();
        incrementScore();
    }
}

function down() {
    value = 0;
    interval = setInterval(update, 100);
}

function up() {
    clearInterval(interval);
}

$('#resetBtn').on('click', function() {
    window.location.reload();
});

function preventLongPressMenu(node) {
    node.on('touchstart', absorbEvent_);
    node.on('touchmove', absorbEvent_);
    node.on('touchend', absorbEvent_);
    node.on('touchcancel', absorbEvent_);
}

function init() {
    preventLongPressMenu($('#spawnBtn'));
}

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
    });

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

let lengthValue;
determineQuantityCompacted = () => {
    if (score == 0) {
        lengthValue = 0;
    } else if (score < 5) {
        lengthValue = 25;
    } else if (score < 10) {
        lengthValue = 50;
    } else if (score < 15) {
        lengthValue = 75;
    } else if (score < 20) {
        lengthValue = 100;
    } else if (score > 25) {
        lengthValue = 125;
    } else if (score > 30) {
        lengthValue = 150;
    } else if (score > 35) {
        lengthValue = 175;
    } else if (score >= 40) {
        lengthValue = 200;
    }
};

makeCompactedPolystyrene = () => {
    compactedPolystyrene = Bodies.rectangle(320, 490, lengthValue, 15, {
        render: {
            visible: true,
            sprite: {
                texture: "assets/img/polystyrene.png",
                xScale: lengthValue / 1000,
                yScale: 0.014
            }
        },
        density: 0.005,
        restitution: 0,
        friction: 0.0006,
        frictionAir: 0.002,
        frictionStatic: 0.01,
        isStatic: false

    });
};

// Function to turn on compactor
$('#compactBtn').on('click', function() {
    determineQuantityCompacted();
    World.remove(engine.world, [
        groundCenter, trapDoorComponent, rightTrapDoor, leftTrapDoor,
        mouseConstraint
    ]);
    makeCompactedPolystyrene();
    World.add(engine.world, [compactedPolystyrene, compactorForeground]);
    Body.setVelocity(compactedPolystyrene, { x: -2.7, y: 0 });

    if (score == 0) {
        $('#winLose').html(
            `
			<div>Score: ${score}</div>
			`
        ).css({ 'display': 'inline-block' });
    } else if (score > 0) {
        $('#winLose').html(
            `
			<div>Success!<br>Score: ${score}<br><br><a href="contact.html">Contact us</a>
            </div>
			`
        ).css({ 'display': 'inline-block' });
    }
    $('#spawnBtn').css('pointer-events', 'none');
    $('#compactBtn').css('pointer-events', 'none');
});

// Add all of the bodies to the world
World.add(engine.world, [
    groundLeft, groundCenter, groundRight, compactor,
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