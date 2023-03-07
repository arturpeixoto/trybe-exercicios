const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const corrigindoProva = (resp, gabarito) => {
    if (resp === gabarito) {
        return 1
    } if (resp === 'N.A') {
        return 0;
    }
    return -0.5
}
const contadorDePontos = (resp, gabarito, callback) => {
    let cont = 0;
    for (let i = 0; i < resp.length; i += 1){
        const confere = callback(resp[i], gabarito[i]);
        cont += confere;
    }
    return `O aluno fez ${cont} pontos na prova.`
}

console.log(contadorDePontos(RIGHT_ANSWERS, STUDENT_ANSWERS, corrigindoProva));