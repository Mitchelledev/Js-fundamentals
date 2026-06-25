let cart = [
     {name: "Apple", price: 20},
     {name: "mango", price: 10},
     {name: "juice", price: 50},
     {name: "gauva", price: 40},
]
cart.push({name: "milk", price: 30});
cart = cart.filter((item) => item.name !== "mango");

let total = 0;

for(let i = 0; i < cart.length; i++){
     total = total + cart[i].price
}

console.log(`total: ${total}`) 


