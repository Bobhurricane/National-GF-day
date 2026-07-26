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

// =============================
// MUSIC PLAYER
// =============================


const songs = [

"music/song1.mp3",

"music/song2.mp3",

"music/song3.mp3"

];


let currentSong = 0;


const player = document.getElementById("musicPlayer");

const source = document.getElementById("songSource");

const songName = document.getElementById("songName");


document.getElementById("playMusic").onclick = () => {

player.play();

};


document.getElementById("pauseMusic").onclick = () => {

player.pause();

};



document.getElementById("nextMusic").onclick = () => {


currentSong++;


if(currentSong >= songs.length){

currentSong = 0;

}


source.src = songs[currentSong];

player.load();

player.play();


songName.innerHTML =
"Song " + (currentSong + 1) + " 🎀";


};

// =============================
// CLASSIC IPOD MUSIC PLAYER
// =============================


const songs = [

    {
        file: "song1.mp3",
        name: "Hasta Donde Te Quiero ❤️",
        cover: "cover1.jpg"
    },

    {
        file: "song2.mp3",
        name: "Todo Cambio - Edición Especial 🎀",
        cover: "cover2.jpg"
    },

    {
        file: "song3.mp3",
        name: "No Voy a Jugar - Eslabon Armado 🌸",
        cover: "cover3.jpg"
    },

    {
        file: "song4.mp3",
        name: "Lo Que Siento - Cuco ✨",
        cover: "cover4.jpg"
    },

    {
        file: "song5.mp3",
        name: "Hey There Delilah - Plain White T's 💌",
        cover: "cover5.jpg"
    }

];



let currentSong = 0;

let isPlaying = false;



// IPOD ELEMENTS

const ipodTab = document.getElementById("ipodTab");

const ipod = document.getElementById("ipod");

const albumCover = document.getElementById("albumCover");

const songTitle = document.getElementById("songTitle");

const playPause = document.getElementById("playPause");

const nextSong = document.getElementById("nextSong");

const previousSong = document.getElementById("previousSong");



// AUDIO PLAYER

const audio = new Audio();




// OPEN / CLOSE IPOD

ipodTab.addEventListener("click", () => {

    ipod.classList.toggle("open");

});




// LOAD SONG

function loadSong(){

    audio.src = songs[currentSong].file;

    albumCover.src = songs[currentSong].cover;

    songTitle.innerHTML = songs[currentSong].name;

}



// PLAY / PAUSE

playPause.addEventListener("click",()=>{


    if(isPlaying){

        audio.pause();

        playPause.innerHTML = "▶️";

        isPlaying = false;


    } else {


        audio.play();

        playPause.innerHTML = "⏸️";

        isPlaying = true;


    }


});




// NEXT SONG

nextSong.addEventListener("click",()=>{


    currentSong++;


    if(currentSong >= songs.length){

        currentSong = 0;

    }


    loadSong();


    audio.play();

    isPlaying = true;

    playPause.innerHTML = "⏸️";


});




// PREVIOUS SONG

previousSong.addEventListener("click",()=>{


    currentSong--;


    if(currentSong < 0){

        currentSong = songs.length - 1;

    }


    loadSong();


    audio.play();

    isPlaying = true;

    playPause.innerHTML = "⏸️";


});



// START WITH FIRST SONG

loadSong();
