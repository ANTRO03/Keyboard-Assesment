const Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const randomNumber = Letters[Math.floor(Math.random() * 25)];

const h1 = document.createElement('h1');
const body = document.querySelector('body');
const h2 = document.createElement('h2');

h1.textContent = "Guess The Secret Letter!"

body.appendChild(h1);

document.body.addEventListener('keyup',function(){
    for (let i = 0; i < Letters.length; i++){
        if (Letters[i] === randomNumber){
          h2.textContent = "SECRET KEY PRESSED " + randomNumber
        }
      }
})

body.appendChild(h2);