let cartDiv = document.querySelector(".container_cart");

function getProductsFromLocalStorage(products) {
  let basket = localStorage.getItem("basket");
  let cardInfo;
  let finalProduct = [];
  if (basket === null) {
    cardInfo = [];
  } else {
    cardInfo = JSON.parse(basket);
  }

  for (let index = 0; index < cardInfo.length; index++) {
    finalProduct.push({
      products: products.filter((p) => p.id == cardInfo[index].id).shift(),
      quantity: cardInfo[index].quantity
    });
  }

  return finalProduct

}

function showCart(products) {
  fetch("produits.json").then((response) =>
    response.json().then((data) => {
      
      products = getProductsFromLocalStorage(data);
      for (let i = 0; i < products.length; i++) {
        cartDiv.innerHTML += `<div class="cart_content">
        <div class="cart_picture">
        <img id="img" src= ../asset/img/${products[i].products.image} alt="charset">
          </div>
            <div class="cart_layout">
              <div class="name_products"> ${products[i].products.nom} <span><button onClick="removeFromBasket(${products[i].products.id})"> <img src="../asset/delete-outline.svg" alt=""></button></span></div>
              <div class="price_products">${products[i].products.prix}XAF</div>
              <div class="category_products">${products[i].products.categorie}</div>
              <div class="quantite_product">
                <label for="">Quantite:</label>
                <input type="button" value="-" />
                <input type="button" value="${products[i].quantity}" />
                <input type="button" value="+" />
              </div>
              <div class="sous_total">Prix unitaire:<span>25.000XAF</span></div>
              <div class="total">total:<span>25.000XAF</span></div>
              
            </div>
        </div>

      `;
      }
    })
  );
  console.log("bonjour");

        
      ` }
      
    }
    
  }))
console.log('bonjour')

}
let products = sessionStorage.getItem("products");
let cart = JSON.parse(sessionStorage.getItem(products));
showCart(products);
