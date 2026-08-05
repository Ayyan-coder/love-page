// script.js

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");
const successPage = document.getElementById("successPage");

// No button ko random jagah move karna
function moveNoButton() {
    const area = document.querySelector(".btnArea");

    const maxX = area.clientWidth - noBtn.offsetWidth;
    const maxY = area.clientHeight - noBtn.offsetHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
});

// Agar kisi tarah click ho bhi jaye to bhi bhaag jaye
noBtn.addEventListener("click", function (e) {
    e.preventDefault();
    moveNoButton();
});

// YES button
yesBtn.addEventListener("click", function () {

    container.style.display = "none";
    successPage.classList.remove("hidden");

    // 70 hearts create karo
    for (let i = 0; i < 70; i++) {
        setTimeout(createHeart, i * 70);
    }
});

// Floating hearts
function createHeart() {

    const heart = document.createElement("div");

    const emojis = ["❤️","💖","💕","💗","💘","💞"];

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let pos = window.innerHeight;

    const timer = setInterval(() => {

        pos -= 4;

        heart.style.top = pos + "px";
        heart.style.opacity = pos / window.innerHeight;
        heart.style.transform =
            `translateX(${Math.sin(pos / 25) * 20}px)`;

        if (pos < -50) {
            clearInterval(timer);
            heart.remove();
        }

    }, 20);
}

// Initial button position
window.onload = () => {
    noBtn.style.left = "220px";
    noBtn.style.top = "0";
};

// Resize par reset
window.addEventListener("resize", () => {
    noBtn.style.left = "220px";
    noBtn.style.top = "0";
});