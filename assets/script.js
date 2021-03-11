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
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add polystyrene compactor object to the canvas
let compactor = Bodies.rectangle(400, 450, 100, 100, {
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

// add all of the bodies to the world
World.add(engine.world, [ground, compactor, polystyrene, mouseConstraint]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);