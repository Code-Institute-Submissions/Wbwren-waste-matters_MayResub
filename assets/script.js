// module aliases
let Engine = Matter.Engine,
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

// create two boxes and a ground
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add polystyrene compactor object to the canvas
let compactor = Bodies.circle(340, 400, 100, {
    isStatic: true,
    density: 0.0005,
    frictionAir: 0.06,
    restitution: 0.3,
    friction: 0.01,
    render: {
        sprite: {
            texture: "assets/images/prwm370.png" // sets the texture as the polystyrene compactor image
        }
    }
})


let polystyrene = Bodies.rectangle(400, 400, 50, 50, {
		isStatic: false,
		density: 0.1,
		restitution: 0,
		friction: 0.1,
		frictionAir: 0.01,
		frictionStatic: 0.5,

        render: {
            sprite: {
                texture: "assets/images/polystyrene.jpg",
                xScale: .05,
                yScale: .05
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
					[ { x:1026, y:1026 }, { x:1025, y:0 }, { x:2, y:0 }, { x:2, y:1025 } ]
				]
			}
		]
	})

// add all of the bodies to the world
World.add(engine.world, [ground, compactor, polystyrene]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);