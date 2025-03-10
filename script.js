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
