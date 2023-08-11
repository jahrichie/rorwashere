var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString("Hi, I'm ROR.")
    .pauseFor(1000)
    .typeString("<br /> I'm a Fullstack developer")
    .pauseFor(500)
    .typeString('.<br /> Dev OP')
    .pauseFor(500)
    .typeString('.<br /> Team Lead')
    .pauseFor(500)
    .typeString('.<br /> Product Designer')
    .typeString('. <br /> and  <br /> <img src="images/unicorn.png" width="32px" height="32px"/>.')
    .start();