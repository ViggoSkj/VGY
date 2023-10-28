//////////////////////////////////////////
////////////////////////////////////////// Rendering cart items
//////////////////////////////////////////


async function getProducts() {
    const res = await fetch("products.php?json=true")
    if (!res.ok) {
        console.warn("could not get products from server")
        return undefined
    }

    return await res.json()
}

function generateCartItemHTML(cartItem, product) {
    const cartItemDiv = document.createElement("div")
    cartItemDiv.id = "item-" + product.id
    cartItemDiv.className = "cart-item panel-border"
    cartItemDiv.innerHTML = `
        <h3>${product.name} ${product.price} sek</h3>
        <div class="info">
            <a href="product.php?id=${product.id}"><img src="public/media/${product.img}" alt="${product.name}"></a>
        </div>
    `
    const actionDiv = document.createElement("div")
    actionDiv.className = "actions"

    const removeButton = document.createElement("button")
    removeButton.id = "remove-cart-item"
    removeButton.addEventListener("click", () => remove(product.id))
    removeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
    `
    const increseButton = document.createElement("button")
    increseButton.id = "increse-cart-item"
    increseButton.addEventListener("click", () => increse(product.id))
    increseButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    `
    const decreseButton = document.createElement("button")
    decreseButton.id = "decrese-cart-item"
    decreseButton.addEventListener("click", () => decrese(product.id))
    decreseButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
        </svg>
    `
    
    const productCountP = document.createElement("p")
    productCountP.innerText = cartItem.productCount + " st"

    actionDiv.appendChild(removeButton)
    actionDiv.appendChild(increseButton)
    actionDiv.appendChild(productCountP)
    actionDiv.appendChild(decreseButton)
    
    cartItemDiv.appendChild(actionDiv)
    
    return cartItemDiv
}

function decrese(productId) {
    Cart().addItem(CartItem(productId, -1))
    renderCartItems()
}

function increse(productId) {
    Cart().addItem(CartItem(productId, 1))
    renderCartItems()
}

function remove(productId) {
    Cart().deleteItem(productId)
    renderCartItems()
}

async function renderCartItems( ){
    const currentCartItemDivs = Array.prototype.slice.call(document.getElementById("cart-item-container").children)
    const products = await getProducts()
    if (products === undefined) {
        return
    }
    const cartItems = Cart().getItems()
    let cartItemDivs = cartItems.map(item => {
        const product = products.filter(p => p.id === item.productId)[0]
        return generateCartItemHTML(item, product)
    })
    
    let left = cartItemDivs
    currentCartItemDivs.map(currentElement => {
        const newEl = left.filter(x => currentElement.id === x.id)[0]
        if (!newEl) {
            currentElement.remove()
        } else {
            document.getElementById(currentElement.id).getElementsByTagName("p")[0].innerText = newEl.getElementsByTagName("p")[0].innerText
        }
        left = left.filter(x => currentElement.id !== x.id)
    })

    console.log(cartItemDivs)
    console.log(left)
    left.map(x => {
        document.getElementById("cart-item-container").appendChild(x)
    })
}


renderCartItems()


//////////////////////////////////////////
////////////////////////////////////////// PaymentFlow
//////////////////////////////////////////

document.getElementById("pay-button").addEventListener("click", async () => {
    const paymentResult = await pay()
    setStatus(paymentResult)
    console.log(paymentResult.status)
    if (paymentResult.status === true) {
        console.log(1)
        window.location.href = "thanks.php"
    }
})

function setStatus(status) {
    const element = document.getElementById("payment-status")
    element.innerText = status.message
    element.className = (status.status) ? "success" : "failure"
}

async function createOrder({name, lastname, email, address, postTown, postnumber, cardNumber, exp, cvv}) {
    cart = Cart().getItems()
    const result = await fetch("order.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name, lastname, email, address, postTown, postnumber, cardNumber, exp, cvv, cart
        })
    })

    if (!result.ok) {
        console.log(result.body)
        return false
    }

    return true
}

async function pay() {
    const name = document.getElementById("name").value
    const lastname = document.getElementById("lastname").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value
    const postTown = document.getElementById("postTown").value
    const postnumber = document.getElementById("postnumber").value
    const cardNumber = document.getElementById("cardnumber").value
    const exp = document.getElementById("exp").value
    const cvv = document.getElementById("cvv").value

    if (typeof name !== "string" || name === "") return {status: false, message: "name was not provided"}
    if (typeof lastname !== "string" || lastname === "") return {status: false, message: "lastname was not provided"}
    if (typeof email !== "string" || email === "") return {status: false, message: "email was not provided"}
    if (typeof address !== "string" || address === "") return {status: false, message: "address was not provided"}
    if (typeof postTown !== "string" || postTown === "") return {status: false, message: "post town was not provided"}
    if (typeof postnumber !== "string" || postnumber === "") return {status: false, message: "postnumber was not provided"}
    if (typeof cardNumber !== "string" || cardNumber === "") return {status: false, message: "cardNumber was not provided"}
    if (typeof exp !== "string" || exp === "") return {status: false, message: "exp was not provided"}
    if (typeof cvv !== "string" || cvv === "") return {status: false, message: "cvv was not provided"}

    const result = createOrder({name, lastname, email, address, postTown, postnumber, cardNumber,exp, cvv})

    if (!result) {
        return {stats: false, message: "Something whent wrong, pleasy try again later..."}
    }

    return {status: true, message: "payment successful"}
}