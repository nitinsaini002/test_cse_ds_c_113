function updateTotalPrice() {
    const quantityInput = document.getElementById("quantity");
    const productPrice = 99.99; // Price of the product
    const totalPriceElement = document.querySelector(".total-price");

    const totalPrice = (quantityInput.value * productPrice).toFixed(2);
    totalPriceElement.textContent = Total Price: $${totalPrice};
}

document.getElementById("quantity").addEventListener("input", updateTotalPrice);

function addToCart() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = (quantity * 99.99).toFixed(2);
    alert(You added ${quantity} items to your cart for $${totalPrice});
}