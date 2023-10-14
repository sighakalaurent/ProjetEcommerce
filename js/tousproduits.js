// recuperation des donnees

const searchInput = document.getElementById("search");
const listproduitsR = document.querySelector(".tousProduits");
const toutecategorie = document.getElementById("boutontous");
const ameublements = document.getElementById("ameublement");
const Decorations = document.getElementById("decoration");
const Vaisselles = document.getElementById("vaisselles");

function navigateToDetail(id) {
  sessionStorage.setItem("productId", id);
  window.location.href = "details.html";
}

const basket = {
  id: "",
  nom: "",
  categorie: "",
  prix: "",
  details: "",
  quantity: "",
};

function addToCart(productId) {
  basket.id = productId;
   console.log(basket)
  addBasket(basket);
}

let products;
fetch("produits.json").then((response) =>
  response.json().then((data) => {
    products = data;

    for (let i = 0; i < products.length; i++) {
      listproduitsR.innerHTML += `
            <div class="produits">
            <div  class = "image" onClick="navigateToDetail(${products[i].id})"><img src="../asset/img/${products[i].image}" alt=""></div>

            <div class="p1"><p>${products[i].nom}</p></div>
            <div class="p2"> <p>${products[i].categorie}</p></div>
            <div class="p3">
                <p>${products[i].prix} XFA</p>
            </div>
            <div class="btn" onClick="addToCart(${products[i].id})"><button>Ajoute au Panier</button></div>
            </div>`;
    }

    searchInput.addEventListener("keyup", () => {
<<<<<<< HEAD
      const input = searchInput.value;
      console.log(input);
      const result = products.filter((produit) =>
        produit.nom.toLowerCase().includes(input.toLowerCase())
      );
      valuesearch = result;
      console.log(valuesearch);
      listproduitsR.innerHTML = "";

      for (let i = 0; i < valuesearch.length; i++) {
        listproduitsR.innerHTML += `
        <div class="produits">
        <div  class = "image" onClick="navigateToDetail(${valuesearch[i].id})"><img src="../asset/img/${valuesearch[i].image}" alt=""></div>

        <div class="p1"><p>${valuesearch[i].nom}</p></div>
        <div class="p2"> <p>${valuesearch[i].categorie}</p></div>
        <div class="p3">
            <p>${valuesearch[i].prix} XFA</p>
        </div>
        <div class="btn" onClick="addToCart(${valuesearch[i].id})"><button>Ajoute au Panier</button></div>
        </div>`;
      }
    });
=======
        const input = searchInput.value;
        console.log(input);
        const result = products.filter((produit) =>
          produit.nom.toLowerCase().includes(input.toLowerCase())
        );
        valuesearch = result;
        console.log(valuesearch);
        
      });
>>>>>>> develop

    toutecategorie.addEventListener("click", () => {
      listproduitsR.innerHTML = "";
      for (let i = 0; i < products.length; i++) {
        listproduitsR.innerHTML += `
        <div class="produits">
        <div  class = "image" onClick="navigateToDetail(${products[i].id})"><img src="../asset/img/${products[i].image}" alt=""></div>

        <div class="p1"><p>${products[i].nom}</p></div>
        <div class="p2"> <p>${products[i].categorie}</p></div>
        <div class="p3">
            <p>${products[i].prix} XFA</p>
        </div>
        <div class="btn" onClick="addToCart(${products[i].id})"><button>Ajoute au Panier</button></div>
        </div>`;
      }
    });

    ameublements.addEventListener("click", () => {
      const categorie = "Ameublement";
      const result = products.filter(
        (produit) => produit.categorie == categorie
      );

      listproduitsR.innerHTML = "";

      for (let i = 0; i < result.length; i++) {
        listproduitsR.innerHTML += `
        <div class="produits">
        <div  class = "image" onClick="navigateToDetail(${result[i].id})"><img src="../asset/img/${result[i].image}" alt=""></div>

        <div class="p1"><p>${result[i].nom}</p></div>
        <div class="p2"> <p>${result[i].categorie}</p></div>
        <div class="p3">
            <p>${result[i].prix} XFA</p>
        </div>
        <div class="btn" onClick="addToCart(${result[i].id})"><button>Ajoute au Panier</button></div>
        </div>`;
      }
    });
    Decorations.addEventListener("click", () => {
      const categorie = "Decoration";
      const result = products.filter(
        (produit) => produit.categorie == categorie
      );

      listproduitsR.innerHTML = "";

      for (let i = 0; i < result.length; i++) {
        listproduitsR.innerHTML += `
        <div class="produits">
        <div  class = "image" onClick="navigateToDetail(${result[i].id})"><img src="../asset/img/${result[i].image}" alt=""></div>

        <div class="p1"><p>${result[i].nom}</p></div>
        <div class="p2"> <p>${result[i].categorie}</p></div>
        <div class="p3">
            <p>${result[i].prix} XFA</p>
        </div>
        <div class="btn" onClick="addToCart(${result[i].id})"><button>Ajoute au Panier</button></div>
        </div>`;
      }
    });
    Vaisselles.addEventListener("click", () => {
      const categorie = "vaisselles";
      const result = products.filter(
        (produit) => produit.categorie == categorie
      );

      listproduitsR.innerHTML = "";

      for (let i = 0; i < result.length; i++) {
        listproduitsR.innerHTML += `
        <div class="produits">
        <div  class = "image" onClick="navigateToDetail(${result[i].id})"><img src="../asset/img/${result[i].image}" alt=""></div>

        <div class="p1"><p>${result[i].nom}</p></div>
        <div class="p2"> <p>${result[i].categorie}</p></div>
        <div class="p3">
            <p>${result[i].prix} XFA</p>
        </div>
        <div class="btn" onClick="addToCart(${result[i].id})"><button>Ajoute au Panier</button></div>
        </div>`;
      }
    });
  })
);
<<<<<<< HEAD
=======

// const showmore = document.getElementById('btn')
// const datajson = fetch('produits.json').then(response => response.json().then(data => {
//     products = data

//     for (let i = 0; i < products.length; i++) {
//         listproduitsR.innerHTML += `
//             <div class="produits">
//             <div class="image"> <img src="../asset/img/${products[i].image}" alt="">
//             </div>
//             <div class="p1"><p>${products[i].nom}</p></div>
//             <div class="p2"> <p>${products[i].categorie}</p></div>
//             <div class="p3">
//                 <p>${products[i].prix} XFA</p>
//             </div>
//             <div class="btn"><button>Ajoute au Panier</button></div>
//             </div>`

//     //     /*   if (valueproduit.includes(searchInput)) {
//     //           products.style.display = 'block'
//     //       } else {
//     //           products.style.display = 'none'
//     //       }        */
//     }

//  }
// ))
// let inputData = ""
// async function searchProduct() {
//     inputData = searchInput.value;
//     const products = `
//     <div class="produits">
//     <div class="image"> <img src="../asset/img/${products.image}" alt="">
//     </div>
//     <div class="p1"><p>${products.nom.inputData}</p></div>
//     <div class="p2"> <p>${products.categorie}</p></div>
//     <div class="p3">
//         <p>${products.prix} XFA</p>
//     </div>
//     <div class="btn"><button>Ajoute au Panier</button></div>
//     </div>`

//     if ()

// }
>>>>>>> develop
