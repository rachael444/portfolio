// Declare variable to store navbar element
const navelement = document.getElementById('navbar');
// detect scroll event on the document
document.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to blue
        navelement.style.backgroundColor = '#0779E4';
    } else {
        // change navbar bg to ytransparent
        navelement.style.backgroundColor = 'transparent';
    }
});

var typed = new Typed('#element', {
    strings: ['I Love to develop.', 'A web Designer', 'A Developer', 'I Love Design'],
    typeSpeed: 75,
    loop: true,
    loopCount: Infinity,
});