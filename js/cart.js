let cartDiv = document.querySelector(".container_cart")
function showCart(products) {
    fetch('produits.json')
    .then(response => response.json().then(data => {
        products= data
        for(let i=0; i < products.length; i++){
            cartDiv.innerHTML += 
            `<div class="cart_content">
        <div class="cart_picture">
        <img id="img" src= ../asset/img/${products[i].image} alt="charset">
          </div>
            <div class="cart_layout">
              <div class="name_products"> ${products[i].nom} <span><img src="../asset/delete-outline.svg" alt=""></span></div>
              <div class="price_products">${products[i].prix}XAF</div>
              <div class="category_products">${products[i].categorie}</div>
              <div class="quantite_product">
                <label for="">Quantite:</label>
                <input type="button" value="-" />
                <input type="button" value="1" />
                <input type="button" value="+" />
              </div>
              <div class="sous_total">Prix unitaire:<span>25.000XAF</span></div>
              <div class="total">total:<span>25.000XAF</span></div>
              
            </div>
            
        </div>
      ` }
    }
))
console.log('bonjour')
}
let products= sessionStorage.getItem("products")
let cart = JSON.parse(sessionStorage.getItem(products))
showCart(products);