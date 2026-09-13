function calculaSaldo(vitorias,derrotas){
    let saldoRanked=(vitorias - derrotas);
    return saldoRanked;
}

function calculaElo(n){
    if (n <= 10) {
        return "FERRO";
    } else if (n >= 11 && n <= 20) {
        return "BRONZE";
    } else if (n >= 21 && n <= 50) {
        return "PRATA";
    } else if (n >= 51 && n <= 80) {
        return "OURO";
    } else if (n >= 81 && n <= 90) {
        return "DIAMANTE";
    } else if (n >= 91 && n <= 100) {
        return "LENDARIO";
    } else {
        return "IMORTAL";
    }
}

let vitorias=35;
let derrotas=10;

let saldo=calculaSaldo(vitorias,derrotas);
let elo=calculaElo(vitorias);

console.log(`O Heroi tem saldo de ${saldo} e esta no Nivel ${elo}`)