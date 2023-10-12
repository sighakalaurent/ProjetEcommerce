const searchInput = document.getElementById('search');
const listproduitsR = document.querySelector(".tousProduits")
const toutecategorie =document.getElementById('boutontous')

let products
fetch('produits.json').then(response => response.json().then(data => {
    products = data
console.log(data)
    for (let i = 0; i < products.length; i++) {
        listproduitsR.innerHTML += `
            <div class="produits">
            <div class="image"> <img src="../asset/img/${products[i].image}" alt="">
            </div>
            <div class="p1"><p>${products[i].nom}</p></div>
            <div class="p2"> <p>${products[i].categorie}</p></div>
            <div class="p3">
                <p>${products[i].prix} XFA</p>
            </div>
            <div class="btn"><button>Ajoute au Panier</button></div>
            </div>`

    }

        searchInput.addEventListener('keyup', () => {
        const input = searchInput.value;
        console.log(input)
        const result = products.filter(produit => produit.nom.toLowerCase().includes(input.toLowerCase()))
        valuesearch = result
        console.log(valuesearch)
        listproduitsR.innerHTML = ""

        for (let i = 0; i < valuesearch.length; i++) {
            listproduitsR.innerHTML += `
                        <div class="produits">
                        <div class="image"> <img src="../asset/img/${valuesearch[i].image}" alt="">
                        </div>
                        <div class="p1"><p>${valuesearch[i].nom}</p></div>
                        <div class="p2"> <p>${valuesearch[i].categorie}</p></div>
                        <div class="p3">
                            <p>${valuesearch[i].prix} XFA</p>
                        </div>
                        <div class="btn"><button>Ajoute au Panier</button></div>
                        </div>`
        }
    })
    toutecategorie.addEventListener('click',()=>{

        for (let i = 0; i < products.length; i++) {
            listproduitsR.innerHTML += `
                <div class="produits">
                <div class="image"> <img src="../asset/img/${products[i].image}" alt="">
                </div>
                <div class="p1"><p>${products[i].nom}</p></div>
                <div class="p2"> <p>${products[i].categorie}</p></div>
                <div class="p3">
                    <p>${products[i].prix} XFA</p>
                </div>
                <div class="btn"><button>Ajoute au Panier</button></div>
                </div>`
               
        }                   })

})


)

