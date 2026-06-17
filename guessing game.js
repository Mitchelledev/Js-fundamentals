let secretNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [30, 45, 17, 61];
let attempts = 0;

for(let i = 0; i < guesses.length; i++){
    let guess = guesses[i];
    attempts++;
    
    if(guess === secretNumber){
        console.log(`Correct! You got it in ${attempts} guesses`)
    } else if(guess > secretNumber){
        console.log(`${guess} is too high, try again`)
    } else {
        console.log(`${guess} is too low, try again`)
    }
}
