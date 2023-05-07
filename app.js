
function game1() {
    Name1 = (window.prompt("Enter your name"));
    Guess1 = Number(window.prompt("Guess A Number 1 - 10"));
    let ranNum = 5//Math.floor(Math.random()*10) + 1;
    guessCount = [];
    Tries1 = 1;

    while (Guess1 != ranNum) {
        Tries1 ++;
        guessCount.push(Guess1);
        if (Guess1 > ranNum) {
        alert(` Sorry ${Name1} You Guessed to High, Try again.`);
        Guess1 = Number(window.prompt("Guess A Number 1 - 10"));
        } else {

        alert(` Sorry ${Name1} You Guessed to low, Try again.`);
        Guess1 = Number(window.prompt("Guess A Number 1 - 10"));
        }
    }
    if (localStorage.getItem(Name1) > Tries1) {
        localStorage.setItem(Name1, Tries1);
        alert(`Good Guess ${Name1} you are correct! It only took you ${Tries1} tries. Your previous attempts were ${guessCount}, You beat your previous attempt.`);
        if (confirm("Would you like to play again?") === true) {
            game1();
        }
    } else if (localStorage.getItem(Name1) < Tries1) {
        localStorage.setItem(Name1, Tries1);
        alert(`Good Guess ${Name1} you are correct! It only took you ${Tries1} tries. Your previous attempts were ${guessCount}, You did better your last attempt.`);
        if (confirm("Would you like to play again?") === true) {
            game1();
        }
    } else {
    localStorage.setItem(Name1, Tries1);
    alert(`Good Guess ${Name1} you are correct! It only took you ${Tries1} tries. Your previous attempts were ${guessCount}`);
    if (confirm("Would you like to play again?") === true) {
        game1();
    }
}
}
game1();
