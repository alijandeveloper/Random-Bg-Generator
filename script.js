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
    const img = new Image();
    img.src = `https://picsum.photos/1920/1080?random=${new Date().getTime()}`;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`;
        document.body.style.backgroundSize = "cover";      // Full-screen cover
        document.body.style.backgroundPosition = "center"; // Center align
        document.body.style.backgroundRepeat = "no-repeat"; // No repeat
        document.body.style.height = "100vh";  // Full viewport height
        document.body.style.width = "100vw";   // Full viewport width
        document.body.style.overflow = "hidden"; // Hide scrollbars (optional)
        colorCode.textContent = "Random Image Applied";
    };
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
