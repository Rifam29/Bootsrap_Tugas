const keywordInput = document.getElementById('keyword');
const searchItemButton = document.getElementById('searchItem');
const cartButton = document.getElementById('cart');
const cartItemCountElement = document.getElementById('cartItemCount');

const listBarangElement = document.getElementById('listBarang');
let cartItems = [];

searchItemButton.addEventListener('click', (event) => {
  event.preventDefault();

  const keyword = keywordInput.value.trim();

  if (keyword) {
    const filteredItems = [];

    for (const item of listBarangElement.children) {
      const cardTitleElement = item.querySelector('.card-title');
      const itemTitle = cardTitleElement.textContent.trim();

      if (itemTitle.toLowerCase().includes(keyword.toLowerCase())) {
        filteredItems.push(item);
      }
    }

    for (const item of listBarangElement.children) {
      item.style.display = 'none';
    }

    for (const item of filteredItems) {
      item.style.display = 'block';
    }
  } else {
    for (const item of listBarangElement.children) {
      item.style.display = 'block';
    }
  }
});
  document.getElementById("addToCartBtn1").addEventListener("click", function() {
    addToCart("Keyboard Logitek", 60000);
});

document.getElementById("addToCartBtn2").addEventListener("click", function() {
    addToCart("Keyboard MSI", 300000);
});

document.getElementById("addToCartBtn3").addEventListener("click", function() {
    addToCart("Mouse Genius", 50000);
});

document.getElementById("addToCartBtn4").addEventListener("click", function() {
    addToCart("Mouse Jerry", 30000);
});

let cartItemCount = 0;

function addToCart(itemName, itemPrice) {
    cartItemCount++;
    updateCartItemCount(cartItemCount);
    showNotification(itemName);
}

function updateCartItemCount(count) {
    document.getElementById("cartItemCount").textContent = `(${count})`;
}
function updateCartItemCount(count) {
  if (count > 9) {
  document.getElementById("cartItemCount").textContent = "(9+)";
  } else {
  document.getElementById("cartItemCount").textContent = `(${count})`;
  }
}

function addToCart(itemName, itemPrice) {
    cartItemCount++;
    updateCartItemCount(cartItemCount);
    showNotification(itemName);
}
function showNotification(itemName) {
    Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${itemName} has been entered into your shopping card.`,
        showConfirmButton: false,
        timer: 1000
    });
}