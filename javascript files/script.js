function showMessage(message) {
    var confirmation = confirm(message);
}

function goToContainer1() {
    document.getElementById('shop-container-1').scrollIntoView({ behavior: 'smooth' });
  }
  
  function goToContainer2() {
    document.getElementById('shop-container-2').scrollIntoView({ behavior: 'smooth' });
  }



let cartCount = 0;


document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      cartCount++;
      document.getElementById('cart-count').innerText = cartCount;
      button.innerText = 'Added!';
      button.style.backgroundColor = 'green';
      setTimeout(function() {
        button.innerText = 'Add to Cart';
        button.style.backgroundColor = '';
      }, 1000);
    });
  });
});