const keyCode = document.querySelector('.keycode');
const keyName = document.querySelector('.keyname');

window.addEventListener('keydown', getKeyCode);

function getKeyCode(e) {
    keyCode.textContent = e.keyCode;
    keyName.textContent = e.code;
}