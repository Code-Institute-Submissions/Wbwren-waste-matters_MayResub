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
        texture: "assets/images/prwm370.png" // set texture here
        }
    }
})

// add all of the bodies to the world
World.add(engine.world, [ground, compactor]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);