const uniforms = [

  {
    id:
    "8860-1f5a963e534b-3ebe75dc-64d2-4137",
    image:"/Images/productImages/22.jpeg",
    name:"Omware",
    rating:{
      stars:5,
      count:80
    },
    priceCents:3050,
  
  },

  {
    id:
    "8860-1f5a963e534b-3ebe75dc-64d2-4137",
    image:"/Images/productImages/7.jpeg",
    name:"Sigiria uniform",
    rating:{
      stars:4.5,
      count:400
    },
    priceCents:1500,
  
  },

  {
    id:
    "8860-1f5a963e534b-3ebe75dc-64d2-4137",
    image:"/Images/productImages/3.jpeg",
    name:"Zambic outfit",
    rating:{
      stars:4,
      count:200
    },
    priceCents:2500,
  
  }];

  let uniformsHTML = '';


uniforms.forEach((uniform) => {


  /*variable using backticks*/
  uniformsHTML += `
    <div class="product-container js-product-grid">
    <div><img class="product-image-container" src=
    "${uniform.image}"></div>
    <div class="product-name">${uniform.name}</div>

    <div class="product-rating-container">
        <img class="product-rating-stars"
          src="${uniform.rating.stars * 10}">
        <div class="product-rating-count link-primary">
        ${uniform.rating.count}
        </div>
      </div>

    <div class="product-price">${(uniform.priceCents /100).toFixed(2)}</div>
    <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    <button class="add-to-cart-button">Add To Cart</button>
</div>`;

console.log(uniformsHTML);

});


document.querySelector('.js-product-grid')
.innerHTML = uniformsHTML;
