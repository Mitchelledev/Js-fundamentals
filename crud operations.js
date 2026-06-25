// CONTACT ARRAY
let contact = [
    {name: "mitchelle", phone: "+234676657"},
    {name: "gabreil", phone: "+23467665456"},
    {name: "chisom", phone: "+234676657878"},
    {name: "adaora", phone: "+2348984774"},
];
// CREATE 

contact.push({name: "chidi", phone: "+23467665456"});

//READ
for(let i = 0; i < contact.length; i++){
    if(contact[i].name === "adaora"){
        console.log(`Name: ${contact[i].name}, Phone: ${contact[i].phone}`)
    }
}

// UPDATE
for(let i = 0; i < contact.length; i++){
    if(contact[i].name === "adaora"){        
        contact[i].phone = "+234577111111";   
        console.log(`Updated: ${contact[i].name} - ${contact[i].phone}`)
    }
}
// DELETE
 contact = contact.filter((item) =>item.name !== "chisom");

// FINAL OUTPUT
 console.log(contact) 


