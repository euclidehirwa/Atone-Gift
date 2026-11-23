
let opened = false;

function openGift() {

    if (opened) {
        return;
    }

    opened = true;

    let gift = document.querySelector(".gift");
    let message = document.getElementById("message");

    gift.classList.add("opening");

    setTimeout(function() {

        gift.style.display = "none";

        message.classList.add("show");

    }, 1000);
}

function createHeart() {

    let heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 700);

