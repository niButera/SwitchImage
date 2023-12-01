var imagens = [
    "media/anmtrnc 1.jpg",
    "media/anmtrnc endo frente.jpg",
    "media/anmtrnc.jpg",
    "media/anmtrncWH.jpg",
    "media/CAT.jpg",
    "media/CAT4.jpg",
    "media/ENDO1.jpg",
    "media/ENDO6.jpg",
];

var indiceAtual = 0;

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarImagem();
}

function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarImagem();
}

function atualizarImagem() {
    var imagem = document.getElementById("imagemAtual");
    imagem.src = imagens[indiceAtual];
}
