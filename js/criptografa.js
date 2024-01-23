function codifica(texto) {
    let caracteres = texto.value.split("");

    caracteres.forEach(function(item, i) {
        if(item == "a") {
            caracteres[i] = "ai";

        } else if(item == "e") {
            caracteres[i] = "enter";

        } else if(item == "i") {
            caracteres[i] = "imes";

        } else if(item == "o") {
            caracteres[i] = "ober";

        } else if(item == "u") {
            caracteres[i] = "ufat";
        }
    })
    return caracteres.join("");
}

function decodifica(texto) {
    let codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    
    texto = texto.value;

    for (const [original, codigoAtual] of codigo) {
        if (texto.includes(codigoAtual)) {
            texto = texto.replaceAll(codigoAtual, original);
        }
    }
    
    return texto;
}


function escreveCodificado() {
    let btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");
    
    resultado.textContent = codifica(inputTexto);
}

function escreveDecodificado() {
    let btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");

    resultado.textContent = decodifica(inputTexto);
}

let inputTexto = document.querySelector(".input-texto");
let resultado = document.querySelector(".resultado");

let btnCodificar = document.querySelector(".btn-codificar");
let btnDecodificar = document.querySelector(".btn-decodificar");

let mensagensErro = document.querySelector(".mensagens-erro");

btnCodificar.onclick = function() {
    let erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }

    escreveCodificado();
    mensagensErro.innerHTML = "";
}

btnDecodificar.onclick = function() {
    let erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }
    
    escreveDecodificado();
    mensagensErro.innerHTML = "";
}