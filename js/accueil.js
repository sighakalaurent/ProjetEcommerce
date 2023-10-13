let products
const parentDiv = document.querySelector(".container_produits")

function navigateToDetail(id){
    sessionStorage.setItem("productId", id)
    window.location.href = "details.html"
    window.location.href = "cart.html"
}

const basket = {
    "id" : "",
    "nom":"",
    "categorie":"",
    "prix":"",
    "details":"",
    "quantity": ""

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

