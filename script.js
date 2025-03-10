/* script.js */
const solidBtn = document.getElementById("solid-btn");
const gradientBtn = document.getElementById("gradient-btn");
const imageBtn = document.getElementById("image-btn");
const autoBtn = document.getElementById("auto-btn");
const copyBtn = document.getElementById("copy-btn");
const saveBtn = document.getElementById("save-btn");
const colorCode = document.getElementById("color-code");
const favorites = document.getElementById("favorites");
let autoChangeInterval;

function getRandomHexColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function applySolidColor() {
    const color = getRandomHexColor();
    document.body.style.background = color;
    colorCode.textContent = color;
}

function applyGradient() {
    const color1 = getRandomHexColor();
    const color2 = getRandomHexColor();
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    colorCode.textContent = `${color1} → ${color2}`;
}

function applyRandomImage() {
    document.body.style.background = `url(https://source.unsplash.com/random/1920x1080)`;
    document.body.style.backgroundSize = "cover";
    colorCode.textContent = "Random Image Applied";
}

function startAutoChange() {
    clearInterval(autoChangeInterval);
    autoChangeInterval = setInterval(applySolidColor, 2000);
}

function copyToClipboard() {
    navigator.clipboard.writeText(colorCode.textContent).then(() => {
        alert("Copied to clipboard!");
    });
}

function saveFavorite() {
    const favColor = document.createElement("div");
    favColor.classList.add("fav-box");
    favColor.style.background = document.body.style.background;
    favColor.addEventListener("click", () => {
        document.body.style.background = favColor.style.background;
    });
    favorites.appendChild(favColor);
}

solidBtn.addEventListener("click", applySolidColor);
gradientBtn.addEventListener("click", applyGradient);
imageBtn.addEventListener("click", applyRandomImage);
autoBtn.addEventListener("click", startAutoChange);
copyBtn.addEventListener("click", copyToClipboard);
saveBtn.addEventListener("click", saveFavorite);
