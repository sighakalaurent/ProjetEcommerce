function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function clearBasket() {
  localStorage.removeItem("basket");
}

function getBasket() {
  let basket = localStorage.getItem("basket");
  if (basket === null) {
    return [];
  } else {
    return JSON.parse(basket);
  }
}

function countProduct() {
  let basket = getBasket();
  const numPanier = document.getElementById("numPanier");
  const num = basket.length;
  numPanier.textContent = num;
}

function addBasket(product) {
  let basket = getBasket();
  let foundProduct = basket.find((p) => p.id == product.id);
  if (foundProduct == undefined) {
    product.quantity = 1;
    basket.push(product);
    saveBasket(basket);
  }
  countProduct();
}
function removeFromBasket(id) {
  let basket = getBasket();
  basket = basket.filter((p) => p.id != id);
  saveBasket(basket);
  location.reload();
}

function changeQuantity(product, quantity) {
  let basket = getBasket();
  let foundProduct = basket.find((p) => p.id == product.id);
  if (foundProduct != undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeFromBasket(foundProduct);
    } else {
      saveBasket(basket);
    }
  }
}

function getNumberProduct() {
  let basket = getBasket();
  let number = 0;
  for (let product of basket) {
    number += product.quantity;
  }
  return number;
}

function getTotalPrice() {
  let basket = getBasket();
  let total = 0;
  for (let product of basket) {
    total += product.quantity * product.price;
  }
  return total;
}

function redirectToWhatsApp() {
  let message = "bonjour a vous j'aimerais obetnir c'est produit:";
  let products = getBasket();
  if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      message +=
        "- " + products[i].nom + " (quantité : " + products[i].quantity + ")";
    }
    let whatsappURL = "https://wa.me/+237620647560/?text=" + message;
    window.location.href = whatsappURL;
    clearBasket(getBasket());
  }
}
