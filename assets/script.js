const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


// constantes qui selectionnent les éléments hmtl
const leftArrow = document.querySelector("#prev");
const rightArrow = document.querySelector("#next");
const pictures = document.querySelector(".banner-img");
const textes = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");
// Variable 
let startpoint = 0;


//  event Listeners click flêches
leftArrow.addEventListener("click", () => {
    console.log("Arrow Left fonctionne");
    prevArrow();
    uImages();
    udots();
    uTexte();
});


rightArrow.addEventListener("click", () => {
    console.log("Arrow Right fonctionne");
    nextArrow();
    uImages();
    udots();
    uTexte();
});


function nextArrow() {
    // Si la condition startpoints est inférieur à la longueur du tableau slides = next
    if (startpoint < slides.length - 1) {
        startpoint = startpoint + 1;
        // startpoint++;
    } else {
        startpoint = 0;
    }
    console.log("next");
}


function prevArrow() {
    // Si la condition startpoints est inférieur à la longueur du tableau slides on revient en arrière
    if (startpoint > 0 && startpoint < slides.length) {
        startpoint = startpoint - 1;
        // startpoint--;
    } else {
        startpoint = slides.length - 1;
    }
    console.log("prev");
}

//  fonction Images
function uImages() {
    const newPictures = slides[startpoint];
    pictures.src = "./assets/images/slideshow/" + newPictures.image;
    pictures.alt = newPictures.tagLine;
}


// fonction points
function udots() {
    // i  compteur pour le nombre de la boucle donc = 0 au début
    // pour  i est inférieur à au nombre de points on continue la boucle ++
    for (let i = 0; i < dots.length; i++) {
        // Si i est égal à startpoints = point blanc
        if (i === startpoint) {
            dots[i].classList.add("dot_selected");
        } else {
            // sinon supprime  point blanc
            dots[i].classList.remove("dot_selected");
        }
    }
}

// fonction changement de texte
// selectionne l'élément html avec query selector , 
function uTexte() {
    const txtend = slides[startpoint];
    textes.innerHTML = txtend.tagLine;
}

function slideByDots() {
    dots.forEach((dot, i) => dot.addEventListener('click', () => {
        startpoint = i;
        uImages();
        udots();
        uTexte();
    }))
}

slideByDots();