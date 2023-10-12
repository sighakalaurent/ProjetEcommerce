function showCart(products) {
    fetch('produits.json')
    .then(response => response.json().then(data => {
        products= data
        for(let i=0; i < products.length; i++){
            parentDiv.innerHTML += 
            `<div class="cart_content">
        <div class="cart_picture">
            <img
              src="../asset/img/${product.image}.png"
              alt=""
            />
          </div>
            <div class="cart_layout">
              <div class="name_products">Chaise de bureau <span><img src="../asset/delete-outline.svg" alt=""></span></div>
              <div class="price_products">${product.prix}XAF</div>
              <div class="category_products">${product.categorie}</div>
              <div class="quantite_product">
                <label for="">Quantite:</label>
                <input type="button" value="-" />
                <input type="button" value="1" />
                <input type="button" value="+" />
              </div>
              <div class="sous_total">Sous-total:<span>25.000XAF</span></div>
              <div class="total">total:<span>25.000XAF</span></div>
              <div class="btn_commandez">
                <input type="button" value="Commandez" />
              </div> 
            </div>
            
        </div>
       ` }
    }
))
}
//   let productId = sessionStorage.getItem("productId")
  