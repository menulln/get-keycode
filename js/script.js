const keyCode = document.querySelector('.keycode');
const keyName = document.querySelector('.keyname');
const headerButton = document.querySelector('.header-button');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const containerKeyCode = document.querySelector('.keycode-container');
const containerKeyName = document.querySelector('.keyname-container');
let darkmode = false;

window.addEventListener('keydown', getKeyCode);
headerButton.addEventListener('click', toggleDarkmode);

function getKeyCode(e) {
    keyCode.textContent = e.keyCode;
    keyName.textContent = e.code;
}

function toggleDarkmode() {
    if (darkmode === false) {
        darkmode = true;
        body.classList.toggle('darkmode-background');
        header.classList.toggle('darkmode-header');
        containerKeyCode.classList.toggle('darkmode-element');
        containerKeyName.classList.toggle('darkmode-element');
        headerButton.textContent = String.fromCodePoint(0x1F315);
    } else {
        darkmode = false;
        body.classList.toggle('darkmode-background');
        header.classList.toggle('darkmode-header');
        containerKeyCode.classList.toggle('darkmode-element');
        containerKeyName.classList.toggle('darkmode-element');
        headerButton.textContent = String.fromCodePoint(0x1F311);
    }
}
