fetch('produits.json')
.then(response => console.log(response.json()))
.then(data => {
  console.log(data);
});