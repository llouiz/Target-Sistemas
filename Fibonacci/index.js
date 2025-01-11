function sequenciaFibonacci(num) {
    let sequence = [0, 1];  // Inicializa a sequência com 0 e 1
    
    // Gera a sequência até o número informado
    while (sequence[sequence.length - 1] < num) {
        let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

function verificaSequenciaFibonacci(num) {
    const sequence = sequenciaFibonacci(num);
    
    // Verifica se o número está na sequência
    if (sequence.includes(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de uso
const numero = 21; // Você pode alterar esse número para testar outros casos
verificaSequenciaFibonacci(numero);
