let maxlimit = 50;

document.getElementById("textInput").addEventListener("input", function(){
    let typed = document.getElementById("textInput").value.length;
    let remaining = maxlimit - typed; 
    document.getElementById("counter").textContent = remaining + "character remaining"; 
}); 