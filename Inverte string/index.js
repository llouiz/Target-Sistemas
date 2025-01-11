function inverterString(str) {
    // Converte a string em um array de caracteres, inverte o array e junta os caracteres novamente
    return str.split('').reverse().join('');
}

// Exemplo de uso
const texto = "Target Sistemas";
const textoInvertido = inverterString(texto);

console.log(`Texto original: ${texto}`);
console.log(`Texto invertido: ${textoInvertido}`);
