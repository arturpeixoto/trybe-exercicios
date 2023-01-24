let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (i of numbers) {
    console.log(i)
}

// 2 Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (i of numbers) {
    soma = soma + i
}
console.log('A soma dos números é:', soma)


// 3 Calcule e imprima a média aritmética dos valores contidos no array;
// 4 A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
console.log('A média aritmética dos valores da array é:', soma/(numbers.length))



// 5 Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// 6 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// 7 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// 8 Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// 9 Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// 10 Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.