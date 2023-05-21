function guessGame(){
       let number= 5;
       let guess = "";
       let amountOfGuesses = 0;
       let exactGuesses = [];
        let name = "";
 
    name = prompt("Input your name here: ");
        do {
            guess = prompt("Guess a number: "); 
            if (number < guess) {
                alert(`Sorry, ${name} you've guessed too high! Keep guessing!`);
            } else if (number > guess) {
                alert(`Sorry, ${name} you've guessed too low! Keep guessing!`);
            } 
            amountOfGuesses ++;
            exactGuesses.push(guess);
        } while (guess != number);
        if(!firstgame) {
        if (localStorage.getItem(name[amountOfGuesses]) > amountOfGuesses) {
            alert(`Good Job! ${name} number of guesses were ${amountOfGuesses} and your exact numbers used were ${exactGuesses} You beat your previous attempt.`);
            localStorage.setItem(name, amountOfGuesses);
            playAgain();
        } else if (localStorage.getItem(name[amountOfGuesses]) < amountOfGuesses) {
            alert(`Good Job! ${name} number of guesses were ${amountOfGuesses} and your exact numbers used were ${exactGuesses} You did better your previous attempt.`);
            localStorage.setItem(name, amountOfGuesses);
            playAgain();
            console.log(localStorage.getItem(name));
        } else if (localStorage.getItem(name[amountOfGuesses]) == amountOfGuesses) {
            alert(`Good Job! ${name} number of guesses were ${amountOfGuesses} and your exact numbers used were ${exactGuesses} You tied your previous attempt.`);
            localStorage.setItem(name, amountOfGuesses);
            playAgain();
        }
    } else {
        alert(`Good Job! ${name} number of guesses were ${amountOfGuesses} and your exact numbers used were ${exactGuesses}.`);
        localStorage.setItem(name, amountOfGuesses);
        playAgain();

    }
}
guessGame()

function playAgain(){
    if (confirm("Would you like to play again? ")){
        guessGame();
    } 
}
