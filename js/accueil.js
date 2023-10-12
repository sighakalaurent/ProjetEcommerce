let products
const parentDiv = document.querySelector(".container_produits")
fetch('produits.json')
    .then(response => response.json().then(data => {
        products= data
        for(let i=0; i < products.length; i++){
            parentDiv.innerHTML += `
            <div class="Produits">
                <a href="details.html"><img id="img" src= ../asset/img/${products[i].image} alt="charset"></a>
                <p id="titre">${products[i].nom}</p>
                <p id="description">${products[i].categorie}</p>
                <p id="prix"><span>${products[i].prix} XAF</span></p>
                 <button id="btn_produits" onclick="ajouteraupanier(1)" >Ajouter au panier</button>
            </div>
            `
        }
        const addToCartButton = document.getElementById("btn_produits");
        addToCartButton.addEventListener("click", addBasket)
    }
))

