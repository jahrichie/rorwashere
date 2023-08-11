var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: false,
});

typewriter.typeString("Hi, I'm ROR.")
    .pauseFor(500)
    .typeString("<br /> I'm a Fullstack developer")
    .pauseFor(100)
    .typeString('.<br /> Dev OP. Team Lead')
    .pauseFor(100)
    .typeString('.<br /> Product Designer')
    .typeString('. <br /> &   <img src="images/unicorn.png" width="32px" height="32px"/>.')
    .callFunction(() => {
      document.getElementsByClassName("my-work-section")[0].style.display = "block";
    })
    .start();