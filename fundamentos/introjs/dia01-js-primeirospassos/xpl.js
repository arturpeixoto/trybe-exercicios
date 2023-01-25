/* let num1 = 9;
let num2 = 8;
let num3 = 7;
let maior = num1;
if (num2 > num1) {
    if (num2 > num3) {
        maior = num2
    }
    else {maior = num3}
}
console.log(maior)
 */

/* num = -12;

if (num > 0) {
    console.log('positive')
} else if (num < 0) {
    console.log('negative')
} else if (num == 0) {
    console.log('zero')
}
 */

peca = 'dama'
switch (peca){
    case 'peao':
        console.log('Anda em frente 1 casa, se for o primeiro movimento do peão pode andar até 2.')
        break
    case 'bispo':
        console.log('Anda nas diagonais, quantas casas quiser.')
        break
    case 'cavalo':
        console.log('Anda em L.')
        break
    case 'torre':
        console.log('Anda em linha reta, quantas casas quiser.')
        break
    case 'dama':
        console.log('Anda em linha reta, ou diagonais quantas casas quiser.')
        break
    case 'rainha':
        console.log('Anda em linha reta, ou diagonais quantas casas quiser.')
        break
    case 'rei':
        console.log('Anda em linha reta, ou diagonais apenas uma casa.')
        break
    default:
        console.log('Não reconheço a peça, tente novamente.')
}
