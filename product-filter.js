let products = [
    {name: "Laptop", price: 500, category: "electronics"},
    {name: "Phone", price: 300, category: "electronics"},
    {name: "Shirt", price: 20, category: "clothing"},
    {name: "Shoes", price: 50, category: "clothing"},
    {name: "Book", price: 15, category: "books"},
];
function displayProducts(list){
    let result = list.map((item) => `<p>${item.name} - $${item.price}</p>`);
    document.getElementById("productList").innerHTML = result.join("");
}

document.getElementById("filterBtn").addEventListener("click", function(){
    let filtered = products.filter((item) => item.category === "electronics");
    
    let result = filtered.map((item) => `<p>${item.name} - $${item.price}</p>`);
    displayProducts(filtered);
}); 
document.getElementById("clothingBtn").addEventListener("click", function(){
    let filtered = products.filter((item) => item.category === "clothing");

    let result = filtered.map((item) => `<p>${item.name} - $${item.price}</p>`); 
     displayProducts(filtered);
});
document.getElementById("allBtn").addEventListener("click", function(){
    displayProducts(filtered);  
});

