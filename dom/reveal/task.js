function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect()
    if (top < 0) {
        return false
    }
    return bottom <= window.innerHeight
}


function addListener(listOfElements, activatorClass) {
    document.addEventListener("scroll", function (e) {
        for (let value of listOfElements) {
            isVisible(value) ? value.classList.add(activatorClass): value.classList.remove(activatorClass)
        }

    return false
})
}

function main() {
    const activatorClass = "reveal_active"
    const reveals = document.querySelectorAll(".reveal")
    addListener(reveals, activatorClass)
}

main()