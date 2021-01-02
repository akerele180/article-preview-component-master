const socials = document.querySelector('.social-links');
const btn = document.getElementById('btn-share');
// const btn = document.querySelector('share-button');
const footer = document.querySelector('.footer');

socials.style.visibility = "hidden";
btn.addEventListener('click', function(){
    socials.style.visibility = "visible";
});