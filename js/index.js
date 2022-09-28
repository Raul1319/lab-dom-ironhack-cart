// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector (".price span");
  
  let quantity = product.querySelector (".quantity input");
  
  let subtotal1 = price.innerText * quantity.value;
  
  let subtotal2 = product.querySelector (".subtotal span");
  
  subtotal2.innerHTML = subtotal1;
  
}


function calculateAll() {

  let allProducts = document.querySelectorAll("product")
  allProducts.forEach((eachProduct) =>{
    eachProduct.innerText = updateSubtotal
  })

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
