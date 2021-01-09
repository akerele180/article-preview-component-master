const socials = document.querySelector('.social-links');
const button = document.querySelector('.share-btn');
const socials2 = document.querySelector("svg");
const container = document.querySelector('.container-mini');

socials.style.display = 'none';
button.addEventListener('click', ()=>{
    // socials.style.visibility = 'visible';
    socials.style.display='flex';
    container.style.transform="translateY(29px)"
})
socials2.addEventListener('click', ()=>{
    socials.style.display="none";
    container.style.transform="translateY(0px)"
})


// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }