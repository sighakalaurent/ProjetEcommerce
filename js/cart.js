fetch('produits.json')
.then(response => console.log(response.json()))
.then(data => {
console.log(data);
});
let cart_picture = document.querySelector("cart_picture")
let name_products = document.querySelector("name_products")
let price_products = document.querySelector("price_products")
let category_products = document.querySelector("category_products")

function cart(products){
    localStorage.setItem("products", JSON.stringify(products))
}
function getCart(){
   let products = localStorage.getItem("products")
}
function addCart(product){

}