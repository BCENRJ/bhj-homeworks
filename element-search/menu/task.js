function getNestedMenu() {
    let menuLink = document.body.querySelectorAll("li")
    let res = []
    Array.from(menuLink, (element) => {
        let child = element.querySelector("ul")
        if (child) {
            res.push(child)
        }
    })
    return res
}

function checkChild(child){
    if (!child.classList.contains("menu_active")) {
        child.classList.add("menu_active")
    } else {
        child.classList.remove("menu_active")
    }
}

function addEventListener(nestedMenu) {
    Array.from(nestedMenu, (child) => {
        child.closest("li").querySelector("a").onclick = (e) =>  {
            for (let value of nestedMenu) {
                if (value === child) {
                    checkChild(child)
                } else {
                    value.classList.remove("menu_active")
                }
            }
            e.stopPropagation()
            return false
        }
})}

function addEventListenerOnWebPageClick(nestedMenu) {
    document.addEventListener("click", function (e) {
        for (let value of nestedMenu) {
                value.classList.remove("menu_active")
            }
    })
}

function main() {
    let nestedMenu = getNestedMenu()
    addEventListener(nestedMenu)
    addEventListenerOnWebPageClick(nestedMenu)
}

main()

