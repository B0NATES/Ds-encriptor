document.addEventListener('DOMContentLoaded', function() {
    let texto = "Bem-vindo ao DC!"; 
    let delay = 60; 
    let container = document.getElementById('texto-digitar');

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