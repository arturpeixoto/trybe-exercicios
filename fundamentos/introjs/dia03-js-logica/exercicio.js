// 1- Crie um fatorial de 10 e mostre na tela. 
/* let fat = 10;
let result = 1;
for (i = 1; i <= fat; i += 1){
    result = i * result
}
console.log('O resultado do fatorial é ' + result); */

// 2- Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let palavra = 'Trybe'
for (i = (palavra.length -1); i >= 0; i -= 1){
    console.log(palavra[i])
}
