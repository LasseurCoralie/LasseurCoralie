/* eslint-disable */
const app = {
  init: function() {

    

    const timerElt = document.getElementById('button-timer');
    console.log(timerElt);
    const modal = document.getElementById('modal');

    let counter = 3;

    let timer = setInterval(function(){
      timerElt.innerText = counter;
      console.log(counter);
      counter-- ;
      if(counter === -1){
        setTimeout(function(){
          timerElt.innerText = 'calm down dude!'
          clearInterval(timer);
          modal.innerHTML = `<p class="result">You've clicked ${counter}</p>`;
        }, 1000);

      }
    }, 1000);
    

  // eslint-disable-next-line padded-blocks
  },
};

document.addEventListener('DOMContentLoaded', app.init);
