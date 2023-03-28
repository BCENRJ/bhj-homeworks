function createProductElem(productID, imgUrl, countValue) {
    let product = document.createElement("div")
    let img = document.createElement("img")
    let count = document.createElement("div")

    product.className = "cart__product"
    product.setAttribute("data-id", productID)
    img.className = "cart__product-image"
    img.src = imgUrl
    count.className = "cart__product-count"
    count.textContent = countValue
    product.append(img, count)
    return product
}

function valueControl(decOrInc, cValue) {
    if (decOrInc === "dec") {
        return cValue > 1 ? cValue - 1: cValue
    }
    return cValue + 1
}

function setUpControl(element) {
    element.children[0].onclick = function () {
        let cValue = parseInt(element.children[1].textContent.trim())
        let newValue = valueControl("dec", cValue)
        element.children[1].textContent = String(newValue)
    }

     element.children[2].onclick = function () {
        let cValue = parseInt(element.children[1].textContent.trim())
        let newValue = valueControl("inc", cValue)
        element.children[1].textContent = String(newValue)
    }

}


function addBtnListener(element, cart) {

    let pID = element.getAttribute("data-id")
    let pImg = element.querySelector(".product__image").src
    let pValue = element.querySelector(".product__quantity-value").textContent.trim()

    for (let e of cart.children) {
        if (e.getAttribute("data-id") === pID) {
            let productCount = e.querySelector(".cart__product-count")
            productCount.textContent = String(parseInt(productCount.textContent.trim()) + parseInt(pValue))
            return true
        }
    }
     cart.insertAdjacentElement("beforeend", createProductElem(pID, pImg, pValue))

}

function main() {
    const cart = document.querySelector(".cart__products")

    const quantityControls = document.querySelectorAll(".product__quantity-controls")
    Array.from(quantityControls, elem => {setUpControl(elem)})

    const product = document.querySelectorAll(".product")
    Array.from(product, elem => {
        let addBtn = elem.querySelector(".product__add")
        addBtn.addEventListener("click", evt => {addBtnListener(elem, cart)})
        }
    )

}

main()