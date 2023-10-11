// Capturando o formulário
const formulario = document.getElementById('formulario');

// Adicionando um ouvinte de evento para o envio do formulário

formulario.addEventListener('submit', function(event) {
event.preventDefault(); // Evita o envio padrão do formulário

// Capturando os valores dos campos A e B
const campoA = parseFloat(document.getElementById('campoA').value);
const campoB = parseFloat(document.getElementById('campoB').value);

// Verificando se B é maior que A
if (campoB > campoA) {
document.getElementById('mensagem').innerHTML = "Formulário válido: B é maior que A!";
} else {
document.getElementById('mensagem').innerHTML = "Formulário INVÁLIDO: B deve ser maior que A!";
}
});