const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentuais(faturamentoPorEstado) {
    // Calcula o faturamento total da distribuidora
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
    
    // Calcula o percentual de cada estado
    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2); // Arredonda para 2 casas decimais
    }
    
    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);

console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
