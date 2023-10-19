


/*
const uniforms = [
  {
  
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "/Images/productImages/0.jpeg",
      name: "school",
      rating: {
        stars: 5,
        count:80 
      },
      priceCents: 1200
  }];
  */

  let uniformsHTML = '';


uniforms.forEach((uniform) => {


  /*variable using backticks*/
  uniformsHTML += 
  `<div class="product-container js-products-grid">
        
  <div class="product-image-container">
    <img class="product-image" src="${uniform.image}" alt="zero" width="100%" ></div>
  <div class="product-name">${uniform.name}</div>
  
    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="/Images/ratings/rating-${uniform.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
      ${uniform.rating.count}
      </div>
    </div>
  
  <div class="product-price">${(uniform.priceCents / 100).toFixed(2)}</div>
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

    <div class="product-spacer"></div>

  <button class="add-to-cart-button">Add To Cart</button>
  </div>
  
  `;

console.log(uniformsHTML);

});


document.querySelector('.js-products-grid')
.innerHTML = uniformsHTML;
