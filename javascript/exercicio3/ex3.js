var atraso = Number(prompt("digite o valor da parsela em atraso: "));

var juros = Number(prompt("Digite a taxa de juros em porcentagem"));

var dias = Number(prompt("digite os dias de atraso"));

var valorp = atraso + (atraso*(juros**2/100) * dias)

document.write("o valor das parcelas é: " + valorp);