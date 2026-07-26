// =============================
// LOADING SCREEN
// =============================

window.addEventListener("load", () => {

    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";

        }, 800);


    }, 3200);

});



// =============================
// ENTER BUTTON
// =============================

const enterButton = document.getElementById("enterButton");


if (enterButton) {

    enterButton.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,

            behavior:"smooth"

        });

    });

}



// =============================
// FLOATING HEARTS
// =============================


function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");


    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "🎀",
        "🌸"
    ];


    heart.innerHTML = hearts[
        Math.floor(Math.random()*hearts.length)
    ];


    heart.style.left = Math.random()*100 + "vw";


    heart.style.animationDuration =
    (Math.random()*5+5)+"s";


    heart.style.fontSize =
    (Math.random()*20+20)+"px";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },8000);


}


setInterval(createHeart,500);



// =============================
// RANDOM LOVE POPUPS
// =============================


const messages = [

"❤️ I love you",

"🎀 You are my favorite person",

"🌸 Thank you for being you",

"💖 You make me happy",

"✨ You are my biggest blessing",

"🐱 Hello Kitty would approve this"

];


function lovePopup(){


    const popup = document.createElement("div");


    popup.className="popup";


    popup.innerHTML =
    messages[
        Math.floor(Math.random()*messages.length)
    ];


    document.body.appendChild(popup);



    setTimeout(()=>{

        popup.remove();

    },3000);


}



setInterval(lovePopup,15000);



// =============================
// RELATIONSHIP COUNTER
// =============================


const anniversary =
new Date("October 2, 2024");



function updateCounter(){


    const today = new Date();


    const difference =
    today - anniversary;


    const days =
    Math.floor(
        difference /
        (1000*60*60*24)
    );


    console.log(
        "Together for " + days + " days ❤️"
    );


}


updateCounter();


// =============================
// PHOTO SPOTLIGHT
// =============================


const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");


photos.forEach(photo => {

    photo.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src = photo.src;

    });

});


closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});
