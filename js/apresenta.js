document.addEventListener('DOMContentLoaded', function() {
    const texto = "Bem-vindo(a) ao Ds'encriptor"; 
    const delay = 60; 
    const container = document.getElementById('texto-digitar');

    function digitarCaracteres(index) {
        if (index < texto.length) {
            container.innerHTML += texto.charAt(index);
            index++;
            setTimeout(function() {
                digitarCaracteres(index);
            }, delay);
        }
    }

    digitarCaracteres(0);
});