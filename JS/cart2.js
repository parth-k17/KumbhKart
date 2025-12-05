const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const checkoutBtn = document.querySelector('.checkout-btn');

function initCart() {
  const cartItems = document.querySelectorAll('.cart-item');
  
  cartItems.forEach(item => {
    const plusBtn = item.querySelector('.plus');
    const minusBtn = item.querySelector('.minus');
    const removeBtn = item.querySelector('.remove-btn');
    const qtyText = item.querySelector('.cart-qty');

    plusBtn.onclick = function() {
      let qty = parseInt(qtyText.textContent);
      qty++;
      qtyText.textContent = qty;
      updateTotal();
    };

    minusBtn.onclick = function() {
      let qty = parseInt(qtyText.textContent);
      if (qty > 1) {
        qty--;
        qtyText.textContent = qty;
        updateTotal();
      }
    };

    removeBtn.onclick = function() {
      item.remove();
      updateTotal();
    };
  });

  updateTotal();
}

function updateTotal() {
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;

  cartItems.forEach(item => {
    const qty = parseInt(item.querySelector('.cart-qty').textContent);
    const price = parseInt(item.querySelector('.cart-price').getAttribute('data-price'));
    
    total += (qty * price);
  });

  cartTotal.textContent = '₹' + total.toLocaleString('en-IN');

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align:center; padding: 2rem;">
        <h3 style="color:#888;">Your cart is empty 😞</h3>
        <p style="color:#aaa; margin-top:10px;">Add some products to continue!</p>
      </div>
    `;
    checkoutBtn.style.opacity = "0.5";
    checkoutBtn.style.cursor = "not-allowed";
    checkoutBtn.disabled = true;
    cartTotal.textContent = '₹0';
  }
}

checkoutBtn.addEventListener('click', () => {
  if (!checkoutBtn.disabled) {
    alert('Proceeding to Payment Gateway...\nTotal Amount: ' + cartTotal.textContent);
  }
});

initCart();
