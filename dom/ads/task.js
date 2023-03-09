function findIndexOfActivateClass(listItems, className) {
    return Array.from(listItems).findIndex((elem) => {
        if (elem.classList.contains(className)) {
            return true
        }
    })
}

function removeClassFromListByIndex(listItems, index, className) {
    return listItems[index].classList.remove(className)
}

function addClassFromListByIndex(listItems, index, className) {
    return listItems[index].classList.add(className)
}

function findOutNextActiveIndex(listItems, currentIndex) {
    return currentIndex + 1 >= listItems.length ? 0 : currentIndex + 1
}

function setColorToElement(element, selectedColor) {
    element.style.color = selectedColor
    return element
}

function main() {
    const activatorClass = "rotator__case_active"
    const rotators = document.querySelectorAll(".rotator__case")

    const currentIndex = findIndexOfActivateClass(rotators, activatorClass)
    const nextIndex = findOutNextActiveIndex(rotators, currentIndex)

    const speed = rotators[nextIndex].getAttribute("data-speed")

    const interval = setInterval(() => {
        setColorToElement(rotators[nextIndex], rotators[nextIndex].getAttribute("data-color"))
        removeClassFromListByIndex(rotators, currentIndex, activatorClass)
        addClassFromListByIndex(rotators, nextIndex, activatorClass)

        clearInterval(interval)
        main()

    }, Number(speed))

}


main()
