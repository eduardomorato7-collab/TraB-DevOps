function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return b !== 0 ? a / b : null;
}

function saudacao(nome) {
    return "Olá, " + nome;
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    saudacao
};
"Ajuste pra teste Final"
