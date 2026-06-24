let students = [
    {name: "mitchelle", score: 65},
    {name: "chisom", score: 70},
    {name: "adaora", score: 40},
    {name: "chidi", score: 40},
]; 
let total = 0;

for(let i = 0; i < students.length; i++){
    total = total + students[i].score;
}

let average = total / students.length; 
console.log(average) 

let highest = students[0].score;

for(let i = 1; i < students.length; i++){
    if(students[i].score > highest){
        highest = students[i].score;  
    }
}
console.log(`highest score: ${highest}`); 


let lowest = students[0].score;

for(let i = 1; i < students.length; i++){
    if(students[i].score < lowest){
        lowest = students[i].score;
    }
}
console.log(`lowest score: ${lowest}`); 