const keyCode = document.querySelector('.keycode');
const keyName = document.querySelector('.keyname');
const headerButton = document.querySelector('.header-button');

window.addEventListener('keydown', getKeyCode);
headerButton.addEventListener('click', switchColorTheme);

function getKeyCode(e) {
    keyCode.textContent = e.keyCode;
    keyName.textContent = e.code;
}