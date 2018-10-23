
function addPrevClass (e) {
  var target = e.target;
    if(target.getAttribute('src')) { // check if it is img
      var li = target.parentNode.parentNode;
      var prevLi = li.previousElementSibling;
      if(prevLi) {
        prevLi.className = 'prev';
      }

      target.addEventListener('mouseout', function() {
        prevLi.removeAttribute('class');
      }, false);
  }
}

if (window.addEventListener) {
  document.getElementById("dock").addEventListener('mouseover', addPrevClass, false);
}

//https://css-tricks.com/snippets/css/typewriter-effect/

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Hello - My name is Ritchie.",
                   "May 2018, I began learning to code.",
                   "My first introduction into development is through UCSD Extension Fullstack Bootcamp.",
                   "It hasn't been easy.",
                   "Late nights, long weekends.  All while working in a kitchen.",
                   "Anything easy isn't worth doing...or something like that.",
                   "As the bootcamp comes to a close, I wish I had reached out more to my peers and teachers",
                   "My goal is to evolve my level of understanding and thoroughness with coding",
                   "Thanks for taking the time to visit my page.  Use the navigation links below to get around.  Take a look at a sample of some of the apps I've built.  Head to the connect section and connect with me on linkedIn or github."
                 ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h3
     document.querySelector("h3").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 75);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback === 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }

  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] === 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i <= dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
