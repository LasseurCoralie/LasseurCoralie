/* eslint-disable */
const app = {
  init: function() {
    // recup id bouton
    const button = document.getElementById('button-timer');
    button.innerText = 10;

    // Je cache la modale dès le début
    // document.getElementById('modal').style.visibility = "hidden";


    // ecoute du click et modification de sa valeur
      let counter = 10;

      let timer = setInterval(function(){
        button.innerText = counter;
        // Compteur descend d'une seconde
        counter--;
              
        if(counter === 0){
          setTimeout(function(){
            // changement texte dans la zone du bouton
            button.innerText = 'calm down dude!'
            clearInterval(timer);
            button.setAttribute('disabled', true);
            document.getElementById('modal').style.display = 'block';
          }, 1000);
        }
      }, 1000);

      button.addEventListener('click', function(){
      document.querySelector('#result').innerText++;
      });

    

    // Partie compteur
    


  },
};

document.addEventListener('DOMContentLoaded', app.init);