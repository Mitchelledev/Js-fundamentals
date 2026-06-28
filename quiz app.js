const question = [
   { question: " what is the capital of Nigeria?",
    options: ["lagos", "Abuja", "kano", "port Harcourt"],
    correctAnswer: "Abuja",
   },
   { question: "who is the president of USA?",
    options: ["Donald trump", "Tinibu", "Abraham lincoln",],
    correctAnswer: "Donald trump",
    },
   { question: "who is the founder of spacex?",
    options: ["mark zugerberg", "Elon musk", "larry page"],
    correctAnswer: "Elon musk" 
   }
]; 

const userAnswers = ["Abuja", "Tinibu", "Elon musk"]; 

let score = 0; 

for(let i = 0; i < question.length; i++){
    if(userAnswers[i] === question[i].correctAnswer){
        score++;
        console.log(`Question ${i + 1}: Correct ✅`)
    } else {
        console.log(`Question ${i + 1}: Wrong ❌`)
    }
}

console.log(`Final score: ${score}/${question.length}`) 


