let products
const parentDiv = document.querySelector(".container_produits")

function countProduct(){
    let basket = localStorage.getItem("basket");
    let products
  if (basket === null) {
    products= [];
  } else {
    products = JSON.parse(basket);
  }

  const numPanier = document.getElementById("numPanier");
  const num = products.length;
  numPanier.textContent = num;
}

countProduct()

function navigateToDetail(id){
    sessionStorage.setItem("productId", id)
    window.location.href = "details.html"
}

const basket = {
    "id" : "",
    "quantity": ""
}

function addToCart(productId){
    basket.id = productId
    console.log(basket)
    addBasket(basket)
}

fetch('produits.json')
    .then(response => response.json().then(data => {
        products= data
        for(let i=0; i < 8; i++){
            parentDiv.innerHTML += `
            <div class="Produits">
                <button class = "imgButton" onClick="navigateToDetail(${products[i].id})"><img id="img" src= ../asset/img/${products[i].image} alt="charset"></button>
                <p id="titre">${products[i].nom}</p>
                <p id="description">${products[i].categorie}</p>
                <p id="prix"><span>${products[i].prix} XAF</span></p>
                 <button id="btn_produits" onClick="addToCart(${products[i].id})">Ajouter au panier</button>
            </div>
            `
        }
    }
))

