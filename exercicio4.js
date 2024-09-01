/* 4)Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa em javascript onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  */


const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentual(faturamento) {
    const totalMensal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    let percentuais = {};

    for (let estado in faturamento) {
        let percentual = (faturamento[estado] / totalMensal) * 100;
        percentuais[estado] = percentual.toFixed(2); 
    }
    return percentuais;
}

const resultado = calcularPercentual(faturamentoPorEstado);

for (let estado in resultado) {
    console.log(`${estado}: ${resultado[estado]}%`);
}