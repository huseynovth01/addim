function createProducts(products) {
    const card = document.createElement('div')
    card.innerHTML=`<div class="card" style="width: 15rem;">
    <div class="card-body">
    <h3>${products.name}</h3>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p>Price:${products.price}$</p>
    </div>
  </div>`
  card.addEventListener('click', ()=>{
    window.open(`/product.html?id=${products.id}`,"_self")
  })
  return card
}
function renderProducts() {
    const card_container = document.querySelector('.card-container')
    products.forEach((x)=>{
        const product = createProducts(x)
        card_container.append(product)
    })
}
renderProducts()