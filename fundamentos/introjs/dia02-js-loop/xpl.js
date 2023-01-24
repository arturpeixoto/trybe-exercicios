/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1]
let indexOfPortfolio = menu.indexOf('Portfólio');
menu.push('Contato')

console.log(menuServices);
console.log(indexOfPortfolio);
console.log(menu)
 */
/* var numero = 7;
for (var tab = 1; tab <= 9; tab += 1) {
    console.log(numero, 'x', tab, '=',tab * numero)
}
 */
/* let listaDeNomes = ['Joana', 'Maria', 'Lucas']
for (let ind = 0; ind < listaDeNomes.length; ind++) {
    let mensagem = "Boas vindas, " + listaDeNomes[ind] + "!"
    console.log(mensagem)
} */
/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (ind = 0; ind < groceryList.length; ind++) {
    console.log(groceryList[ind])
} */

/* let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nome of names) {
    msg = 'Olá ' + nome
    console.log(msg)
} */


function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}
