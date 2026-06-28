document.getElementById("addBtn").addEventListener("click", function(){
    let task = document.getElementById("taskInput").value;

    if(task === ""){
      alert("please enter a task first");
      return;
    }

    let li = document.createElement("li");
    li.textContent = task; 

    // DELETE button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    // COMPLETE button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function(){
        li.style.textDecoration = "line-through";
    });

     li.appendChild(deleteBtn);
     li.appendChild(completeBtn);
     document.getElementById("taskList").appendChild(li);
     document.getElementById("taskInput").value = "";
 }) 
   

 
