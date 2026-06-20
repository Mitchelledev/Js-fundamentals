let password1 = "michel";
let password2 = "michelle"
let password3 = "michelle@123";

function checkPasswordStrength(password){
    if(password.length < 6){
        return "weak"; 
    }
    else if(password.length >= 6  && !/\d/.test(password)){
        return "medium";
    }
    else if(password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password)){
        return "strong"; 
    }

}
console.log(checkPasswordStrength("michel"))        
console.log(checkPasswordStrength("michelle"))     
console.log(checkPasswordStrength("michelle@123"))  


