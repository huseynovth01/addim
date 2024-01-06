const params = new URLSearchParams(window.location.search) 
console.log(params);
const id = parseInt(params.get('id'))

const productss =products.find(x=>x.id==id) 

const product = document.createElement('div')
product.innerHTML=`<div class="card" style="width: 25rem; height: 30rem;">
<div class="card-body">
<h3>${productss.name}</h3>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Price:${productss.price}$</p>
</div>
</div>`
const container = document.querySelector('.container')
container.append(product)