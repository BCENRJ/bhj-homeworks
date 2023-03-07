let sliderItemActive = "slider__item_active"
let sliderDotActive = "slider__dot_active"

let sliderItem = "slider__item"
let sliderDot = "slider__dot"


function arrayOfClassItems(value) {
    let sliderItemsHtmlColl = document.body.getElementsByClassName(value)
    return Array.from(sliderItemsHtmlColl)
}

function findActiveSlide(element) {
    return element.classList.contains(sliderItemActive);
}

function findIndexOfActiveSlide (arrItems) {
    return arrItems.findIndex(findActiveSlide)
}

function findIndexOfNextActiveSlide(arrItems, activeIndex) {
    if (activeIndex + 1 >= arrItems.length) {
        return 0
    }
    return activeIndex + 1
}

function findIndexOfPreviousActiveSlide(arrItems, activeIndex) {
    if (activeIndex - 1 < 0) {
        return arrItems.length - 1
    }
    return activeIndex - 1
}


function deactivateSlide(element, selectedClass) {
    element.classList.remove(selectedClass)
}

function activateSlide(element, selectedClass) {
    element.classList.add(selectedClass)
}

function refreshBtn(selectedIndex) {
    let slideItems = arrayOfClassItems(sliderItem)
    let dotItems = arrayOfClassItems(sliderDot)
    let currentIndex = findIndexOfActiveSlide(slideItems)

    deactivateSlide(slideItems[currentIndex], sliderItemActive)
    deactivateSlide(dotItems[currentIndex], sliderDotActive)

    activateSlide(slideItems[selectedIndex], sliderItemActive)
    activateSlide(dotItems[selectedIndex], sliderDotActive)
}

function arrow_btn(value) {
    let slideItems = arrayOfClassItems(sliderItem)
    let currentIndex = findIndexOfActiveSlide(slideItems)

    let selectedIndex = 0
    if (value === "next") {
        selectedIndex = findIndexOfNextActiveSlide(slideItems, currentIndex)
    } else if (value === "prev") {
        selectedIndex = findIndexOfPreviousActiveSlide(slideItems, currentIndex)
    }
    refreshBtn(selectedIndex)
}


function main() {
    document.body.getElementsByClassName("slider__arrow_next")[0].addEventListener("click", () => arrow_btn("next"))
    document.body.getElementsByClassName("slider__arrow_prev")[0].addEventListener("click", () => arrow_btn("prev"))
    let dots = document.body.getElementsByClassName("slider__dot")
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            refreshBtn(i)
        })
    }
}

main()

