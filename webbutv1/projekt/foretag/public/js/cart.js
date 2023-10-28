function CartItem(productId, productCount) {
    return {
        productId,
        productCount
    }
}


function Cart() {

    function getItems() {
        try {
            const storedCart = localStorage.getItem("cart")
            const cart = JSON.parse(storedCart)
            return (cart !== null ) ? cart : []
        } catch(err) {
            return []
        }
    } 

    function addItem(newCartItem) {
        const currentCart = getItems()

        // if that product already exist, just incresse the count
        const matchingCartItem = currentCart.filter(x => x.productId === newCartItem.productId)[0]
        if (matchingCartItem !== undefined && matchingCartItem.productCount + newCartItem.productCount > 0) {
            localStorage.setItem("cart", JSON.stringify(currentCart.map(x => (x.productId === newCartItem.productId) ? {...x, productCount: x.productCount + newCartItem.productCount} : x)))
            return
        } else if (matchingCartItem !== undefined && matchingCartItem.productCount + newCartItem.productCount < 1) {
            return
        }

        localStorage.setItem("cart", JSON.stringify([...currentCart, newCartItem]))
    }

    function deleteItem(productId) {
        const currentCart = getItems()
        localStorage.setItem("cart", JSON.stringify(currentCart.filter(x => x.productId !== productId)))
        
    }

    function erase() {
        localStorage.setItem("cart", "")
    }

    return {
        getItems,
        addItem,
        deleteItem,
        erase
    }
}



