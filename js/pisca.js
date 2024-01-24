
function blinkBorder() {
    let textArea = document.getElementById("texto-input");

    setInterval(function () {
        textArea.style.borderColor = (textArea.style.borderColor === 'transparent') ? 'var(--cor-tercearia)' : 'transparent';
    }, 500);
}

window.onload = function () {
    blinkBorder();
};
