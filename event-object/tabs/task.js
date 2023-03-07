function removeClassFromArray(list, className) {
    list.forEach((elem) => {
        if (elem.classList.contains(className)) {
            elem.classList.remove(className)
        }
    }
    )
}

function addClassToArrayByIndex(list, index, activator) {
    list[index].classList.add(activator)
}

function arrayConvert(data) {
    return Array.from(data)
}

function main () {
    const tabActivator = "tab_active"
    const contentActivator = "tab__content_active"
    const tabs = arrayConvert(document.body.getElementsByClassName("tab"))
    const contents = arrayConvert(document.body.getElementsByClassName("tab__content"))

    for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        removeClassFromArray(tabs, tabActivator)
        removeClassFromArray(contents, contentActivator)
        addClassToArrayByIndex(tabs, i, tabActivator)
        addClassToArrayByIndex(contents, i, contentActivator)

    })
}
}

main()
