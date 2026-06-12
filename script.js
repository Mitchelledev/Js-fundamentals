//  FUNDAMENTALS EXCERCISE ON JAVASCRIPT.

// CONDITIONALS:

// A SIMPLE AGE CHECKER THAT TELLS IF SOMEONE CAN VOTE.

// let age = 18;

// if (age > 18){
//     console.log("you can vote!")
// }
// else if(age === 18){
//     console.log("you just turned 18, you can vote")
// }
// else{
//     console.log("sorry you can't vote till you turn 18")
// }

//    EXCERCISE TWO ON CONDITIONALS 
// A GARDE CLASSIFIER - INPUT A SCORE, OUTPUT A/B/C/D/F WITH EDGE CASES 
// ("What if someone enters -5 or 110?")

let score = 90;

if(score < 0 ||score > 100){
    console.log("invalid input")
}
else if(score >= 90){
    console.log("A")
}
else if(score >= 80){
    console.log("B")
}
else if(score >=70){
    console.log("c")
}
else if(score >=60){
    console.log("D")
}
else{
    console.log("F")
}
