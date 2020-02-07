var slideIndex = 1;
var img =["url(/assets/img/astronaut-earth.jpg)", "url(/assets/img/computer.jpg)", "url(/assets/img/rocket.jpg)", "url(/assets/img/cover.jpg)"];
var text = [
    "THE COMPUTING RACE TO SPACE: FROM SPUTNIK TO APOLLO",
    "COMPANION TO THE STARS: THE APOLLO GUIDANCE COMPUTER",
    "MAKE IT SO! SCIENCE FICTION, COMPUTING & SPACE",
    "A TOUR THROUGH THE CHANGING WORLD OF SPACE",
]


function plusDivs(n) {
    reverseIndex(slideIndex += n);
    console.log(slideIndex);
}

function reverseIndex(n) {
    if (n > img.length) {slideIndex = 1}
    if (n < 1) {slideIndex = img.length}
    document.body.style.backgroundImage = img[slideIndex-1];
    document.getElementById("text").innerHTML = text[slideIndex-1];
}

