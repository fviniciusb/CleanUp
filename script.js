var cadastro = document.querySelector("ouverlay")

cadastro.addEventListener("click", function () {
    window.open("https://www.youtube.com/", "_blank")
});

function PagInicial() {
    location.href("http://127.0.0.1:5502/index.html")
}
function BotaoSobre() {
    window.open("http://127.0.0.1:5502/index.html", "_blank")
} 
function BotaoEntrar() {
    window.open("./cadastro.html", "_blank")
}
function BotaoContato() {
    window.open("https://www.github.com/", "_blank")
}

function CadCompleto(){
    window.open("./cadCompleto.html")
}