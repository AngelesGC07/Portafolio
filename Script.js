//alert("Hola Mundo <3");


let app = document.getElementById('app');
let typewriter= new Typewriter(app,{
    loop:true,
    delay:75,
})

typewriter
.pauseFor(2500)
.typeString('Angeles')
.pauseFor(300)
.deleteAll()
.typeString('Desarrolladora FRONTEND JR')
.typeString('')
.pauseFor(1000)
.start();

let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

typewriterFrase
  .pauseFor(2500) 
  .typeString('"De la inspiración a la creación y de la creación a la realidad."')
  .pauseFor(300)
  .deleteAll()
  .pauseFor(1000)
  .start();
