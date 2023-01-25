// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
/* A soma total de 1 a 50 é: */

/* sum = 0;
for (let i = 1; i <= 50; i += 1) {
    sum += i
}
console.log('A soma total de 1 a 50 é:' + sum);
 */

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

/* let cont = 0;
for (let i = 2; i <= 150; i += 1){
    if (i % 3 === 0){
        cont += 1;
    }
} 
console.log('A quantidade de números no intervalo de 2 e 150 divisíveis por 3: ' + cont);
if (cont === 50){
    console.log('Parabéns, você é legal, xablau');
} */

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
jogadas = ['Pedra', 'Papel', 'Tesoura']
jNum = (Math.random() * 3);
let playJogador = '';
let playComputador = jogadas[jNum];
console.log(jNum);
console.log(playComputador);

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.


// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.