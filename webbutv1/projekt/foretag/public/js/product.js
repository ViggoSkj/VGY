document.getElementById("addToCart").addEventListener("click", e => {
    const productId = Number(e.target.getAttribute("data-productId"))

    if (isNaN(productId))
        return

    Cart().addItem(CartItem(productId, 1))
})