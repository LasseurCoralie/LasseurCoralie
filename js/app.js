/* eslint-disable */
const app = {
  init: function() {
    // recup id bouton
    const button = document.getElementById('button-timer');
    //  recup id zone résultat + initialisation
    const resultTxt = document.getElementById('result');
    resultTxt.innerText = 0;


    // Partie compteur
    let counter = 2;

    let timer = setInterval(function(){
      button.innerText = counter;
      console.log(counter);
      counter-- ;
      if(counter === 0){

        button.addEventListener('click', function(){
          let result = resultTxt.innerText++;
        });

        setTimeout(function(){
          // changement texte dans la zone du bouton
          button.innerText = 'calm down dude!'
          clearInterval(timer);
          button.setAttribute('disabled', true);
        }, 1000);
      }
    }, 1000);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
