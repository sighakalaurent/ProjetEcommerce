function showDetail(productId) {
  fetch("produits.json").then((response) =>
    response.json().then((data) => {
      let product = data.filter((product) => product.id == productId).shift();
      document.querySelector(
        ".container_details"
      ).innerHTML = `<div class="details_products">
      <h1>Details produits</h1>
      <div class="details_picture">
          <img src="../asset/img/${product.image}" alt="">
          <div class="name_products">${product.nom}</div>
          <div class="category_products">${product.categorie}</div>
          <div class="price_products">${product.prix} XAF</div>
      </div>
      <div class="quantity_product">
          <input type="button" value="-">
          <input type="button" value="1">
          <input type="button" value="+">
      </div>
      <div class="btn_cart">

          <input type="button" value="Panier">

          <!-- <input type="button" value="Ajoute au Panier"> -->
      </div>
      <div class="details">
          <p>${product.details} </p>
      </div>
  </div>`;
    })
  );
}

let productId = sessionStorage.getItem("productId")

showDetail(productId);
