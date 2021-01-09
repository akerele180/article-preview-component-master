const socials = document.querySelector('.social-links');
const button = document.querySelector('.share-btn');
const socials2 = document.querySelector("svg");
const container = document.querySelector('.container-mini');
var viewPort = window.matchMedia("(min-width: 701px)");

socials.style.display = 'none';
button.addEventListener('click', ()=>{
    // socials.style.visibility = 'visible';
    if (socials.style.display==='flex'){
        socials.style.display="none";
    }else {

        socials.style.display='flex';
    }
    if (viewPort.matches) { // If media query matches
        container.style.transform="translateY(0)";
      } else {
        container.style.transform="translateY(29px)";
      }
})
socials2.addEventListener('click', ()=>{
    socials.style.display="none";
    container.style.transform="translateY(0px)"
})


// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes



// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }