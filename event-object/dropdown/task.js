function openOrCloseDropDown(element, activatorClass) {
     let check = element.classList.contains(activatorClass)
        if (check) {
            element.classList.remove(activatorClass)
        } else {
            element.classList.add(activatorClass)
        }
}

function process(box, classActivator) {
    const dropDownList = box.getElementsByClassName("dropdown__value")[0]
    const element = box.getElementsByClassName("dropdown__list")[0]
    dropDownList.addEventListener("click", function (e) {
        openOrCloseDropDown(element, classActivator)
        e.stopPropagation()
    }
    )
    const dropDownItemsLink = box.getElementsByClassName("dropdown__link")
    Array.from(dropDownItemsLink, (elem) => {
    elem.addEventListener("click", function (e) {
        dropDownList.innerHTML = elem.innerHTML.trim()
        e.preventDefault()

    })
})
}

function anyClicks(dropDownElement, classActivator) {
      document.addEventListener("click", function (e) {
        const element = dropDownElement.getElementsByClassName("dropdown__list")[0]
        if (element.classList.contains(classActivator)) {
            element.classList.remove(classActivator)
        }
    })
}
function main() {
    const classActivator = "dropdown__list_active"
    const dropDownElement = document.body.getElementsByClassName("dropdown")[0]

    process(dropDownElement, classActivator)
    anyClicks(dropDownElement, classActivator)


}

main()

