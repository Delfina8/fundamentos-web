/*
Case sensitive = reconhece letras maiúsculas e minúsculas

Acessar 
por Tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByNome()
por classe: getElementsByClassName
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")  /* acessa o elemento que tem o id nome */
let email = document.querySelector("#email") /* chama o e-mail */
let assunto = document.querySelector("#assunto") /* chama o nome */
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa =document.querySelector("#mapa")

/* Alterar o tamanho da linha onde inserimos o nome,email e assunto */
nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

/* Função para validar o campo "nome" */
function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.lenght < 3) {
        txtNome.innerHTML = "Nome Inválido" /* innerHTML coloca um valor dentro da div*/
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) { /* Se o idexOf retornar 1(o elemento existe) e se retornar -1(o elemento não  existe)*/
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

/* limitar o assunto em 100 caracteres*/
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none' /* style.display = como um elemento aparece dentro de uma página*/
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    }
    else {
        alert("Preencha o formulário corretamente!")
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
