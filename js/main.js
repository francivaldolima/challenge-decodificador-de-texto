function criptografar(texto) {
  let palavra = texto;
  let palavraFinal = palavra.value.split("");
  for (let i = 0; i < palavraFinal.length; i++) {
    if (palavraFinal[i] === "a") {
      palavraFinal[i] = "ai";
    } else if (palavraFinal[i] === "e") {
      palavraFinal[i] = "enter";
    } else if (palavraFinal[i] === "i") {
      palavraFinal[i] = "imes";
    } else if (palavraFinal[i] === "o") {
      palavraFinal[i] = "ober";
    } else if (palavraFinal[i] === "u") {
      palavraFinal[i] = "ufat";
    }
  }
  return palavraFinal.join("");
}

function descriptografar(texto) {
  texto = texto.value;
  if (texto.includes("ai")) {
    texto = texto.replace(/ai/gim, "a");
  }
  if (texto.includes("enter")) {
    texto = texto.replace(/enter/gim, "e");
  }
  if (texto.includes("imes")) {
    texto = texto.replace(/imes/gim, "i");
  }
  if (texto.includes("ober")) {
    texto = texto.replace(/ober/gim, "o");
  }
  if (texto.includes("ufat")) {
    texto = texto.replace(/ufat/gim, "u");
  }

  return texto;
}

function escreverCriptografia() {
  resultado.textContent = criptografar(inputTexto);
}

function escreverDescriptografia() {
  resultado.textContent = descriptografar(inputTexto);
}

function copy() {
  let copyText = document.querySelector("#area");
  copyText.select();
  document.execCommand("copy");
  aparecerImagem();
  document.getElementById("myDIV").style.visibility = "hidden";
}

function removerImagem() {
  document.getElementById("foto").style.display = "none";
  document.getElementById("area").style.display = "block";
}

function aparecerImagem() {
  document.getElementById("foto").style.display = "block";
  document.getElementById("area").style.display = "none";
}

function aparecerButton() {
  document.getElementById("myDIV").style.visibility = "visible";
}

document.querySelector("#copy").addEventListener("click", copy);

let inputTexto = document.querySelector(".input-texto");
let resultado = document.querySelector(".resultado");

let btnCodificar = document.querySelector(".btn-codificar");
let btnDecodificar = document.querySelector(".btn-decodificar");

btnCodificar.onclick = function () {
  escreverCriptografia();
  removerImagem();
  aparecerButton();
  inputTexto.value = "";
};

btnDecodificar.onclick = function () {
  escreverDescriptografia();
  removerImagem();
  aparecerButton();
  inputTexto.value = "";
};
