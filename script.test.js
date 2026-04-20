const {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    saudacao
} = require('./script');

test('soma', () => {
    expect(soma(2, 3)).toBe(5);
});

test('subtracao', () => {
    expect(subtracao(5, 3)).toBe(2);
});

test('multiplicacao', () => {
    expect(multiplicacao(2, 3)).toBe(6);
});

test('divisao', () => {
    expect(divisao(6, 2)).toBe(3);
});

test('saudacao', () => {
    expect(saudacao("Fulano")).toBe("Olá, Fulano");
});
