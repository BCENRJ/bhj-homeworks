function removeClassFromListOfElements(listData, className) {
    Array.from(listData).forEach((element) => {
        if (element.classList.contains(className)) {
            element.classList.remove(className)
        }
    })
}

function addClassToElement(element, className) {
     element.classList.add(className)
}


function changeClass(element, key, object) {

    Object.entries(object).forEach(([k, v]) => {
        element.classList.remove(v)
    })

    let value = object[key]
    if (value) {
        element.classList.add(value)
    }
}


function addListener(elementsList, activatorClass, bookClass, attribute, objects ) {

        for (let i = 0; i < elementsList.length; i++) {
            elementsList[i].addEventListener("click", function (e) {

            const selectedElem = elementsList[i]
            removeClassFromListOfElements(elementsList, activatorClass)
            addClassToElement(selectedElem, activatorClass)

            const key = selectedElem.getAttribute(attribute)
            changeClass(bookClass, key, objects)
            e.preventDefault()
    })
}
}

function main() {

    // font
    const fontSizeElements = document.querySelectorAll(".font-size")
    const activateClassFontSize = "font-size_active"
    const bookContent = document.getElementById("book")
    const attrSize = "data-size"
    const objectSizes = {small: "book_fs-small", big: "book_fs-big" }
    // text
    const textElements = document.querySelector(".book__control_color").querySelectorAll(".color")
    const activateClassText = "color_active"
    const attrText = "data-text-color"
    const objectText = {black: "book_color-black", gray: "book_color-gray", whitesmoke: "book_color-whitesmoke"}
    // background
    const bgElements = document.querySelector(".book__control_background").querySelectorAll(".color")
    const activateClassBg = "color_active"
    const attrBg = "data-bg-color"
    const objectBg = {black: "book_bg-black", gray:"book_bg-gray", white: "book_bg-white"}

    addListener(textElements, activateClassText, bookContent, attrText, objectText)
    addListener(fontSizeElements, activateClassFontSize, bookContent, attrSize, objectSizes)
    addListener(bgElements, activateClassBg, bookContent, attrBg, objectBg)

}

main()

