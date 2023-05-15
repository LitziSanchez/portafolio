let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});
 
typewriter
  .pauseFor(500)
  .typeString('Diseñadora y Desarrolladora Web Front-End')
  .pauseFor(1500)
  .deleteChars(10)
  .start();
