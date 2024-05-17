let vitorias = 100;
let derrotas = 20;
const resultado = ranqueadas(vitorias, derrotas);
console.log(resultado);

function ranqueadas(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  let saldoVitorias = vitorias - derrotas;

  // Determina o nivel com base no saldo de vitórias
  let nivel;

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias <= 100) {
    nivel = "Lendário ";
  } else {
    nivel = "Imortal ";
  }
  // Retorno a mensagem de saída
  return `O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}!`;
}
