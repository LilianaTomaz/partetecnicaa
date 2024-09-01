/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

// Dados em formato JSON
const faturamentoMensal = [
    { "dia": 1, "valor": 1000.0 },
    { "dia": 2, "valor": 1500.0 },
    { "dia": 3, "valor": 0.0 }, // Final de semana
    { "dia": 4, "valor": 1800.0 },
    { "dia": 5, "valor": 1900.0 },
    { "dia": 6, "valor": 0.0 }, // Final de semana
    { "dia": 7, "valor": 2000.0 },
    { "dia": 8, "valor": 1700.0 },
    { "dia": 9, "valor": 0.0 }, // Final de semana
    { "dia": 10, "valor": 1500.0 },
    { "dia": 11, "valor": 2500.0 },
    { "dia": 12, "valor": 2400.0 },
    { "dia": 13, "valor": 0.0 }, // Final de semana
    { "dia": 14, "valor": 2600.0 },
    { "dia": 15, "valor": 3000.0 },
    { "dia": 16, "valor": 0.0 }, // Final de semana
    { "dia": 17, "valor": 1700.0 },
    { "dia": 18, "valor": 2300.0 },
    { "dia": 19, "valor": 0.0 }, // Final de semana
    { "dia": 20, "valor": 2400.0 },
    { "dia": 21, "valor": 2700.0 },
    { "dia": 22, "valor": 2800.0 },
    { "dia": 23, "valor": 0.0 }, // Final de semana
    { "dia": 24, "valor": 0.0 }, // Final de semana
    { "dia": 25, "valor": 2900.0 },
    { "dia": 26, "valor": 3000.0 },
    { "dia": 27, "valor": 3100.0 },
    { "dia": 28, "valor": 2800.0 },
    { "dia": 29, "valor": 3100.0 },
    { "dia": 30, "valor": 3400.0 }
];

// calculando o menor, o maior faturamento e os dias acima da média
function calcularFaturamento(faturamento) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let somaValores = 0;
    let diasComFaturamento = 0;

    
    for (let i = 0; i < faturamento.length; i++) {
        let valor = faturamento[i].valor;

        if (valor > 0) { 
            if (valor < menorValor) {
                menorValor = valor;
            }
            if (valor > maiorValor) {
                maiorValor = valor;
            }
            somaValores += valor;
            diasComFaturamento++;
        }
    }

    // média mensal
    let mediaMensal = somaValores / diasComFaturamento;

    // quantos dias tiveram faturamento acima da média
    let diasAcimaDaMedia = 0;
    for (let i = 0; i < faturamento.length; i++) {
        let valor = faturamento[i].valor;
        if (valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    }

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);