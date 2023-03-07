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

function disableLink(nestedMenu) {
    Array.from(nestedMenu, (child) => {
        let nodeList = child.querySelectorAll("li")
        Array.from(nodeList, (element) => {
            element.querySelector("a").onclick = () => {return false}
        })
    })
}

function addEventListener(nestedMenu) {

    Array.from(nestedMenu, (child) => {
        child.closest("li").querySelector("a").onclick = (e) =>  {
            for (let value of nestedMenu) {
                value.classList.remove("menu_active")
            }
            child.classList.add("menu_active")
            return false

        }
})}

function addEventListenerOnWebPageClick(nestedMenu) {
    Array.from(nestedMenu, (child) => {
         child.closest("li").querySelector("a").classList.add("has_listener")
        })

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("has_listener")) {
            return
        }
        for (let value of nestedMenu) {
                value.classList.remove("menu_active")
            }

    })
}

function main() {
    let nestedMenu = getNestedMenu()
    // disableLink(nestedMenu)
    addEventListener(nestedMenu)
    addEventListenerOnWebPageClick(nestedMenu)
}

main()

