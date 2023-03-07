const checkNumber = (guess, number) => guess === number;

const lottery = (guess, check) => {
    const number = Math.ceil(Math.random() * 5);
    return check(guess, number) ? `Você ganhou! Chutou ${guess} e era ${number}` : `Você perdeu! Chutou ${guess} e era ${number}`;
}

console.log(lottery(2,checkNumber));