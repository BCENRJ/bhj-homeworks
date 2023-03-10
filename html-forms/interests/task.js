function addListener(mainTarget, secondaryTarget) {

    mainTarget.addEventListener("change",  () => {
        mainTarget.checked ? secondaryTarget.forEach((e) => {e.checked = true}) : secondaryTarget.forEach((e) => {e.checked = false})
    })

    secondaryTarget.forEach((elem) => {
        elem.addEventListener("change", () => {
            let checkedElements = secondaryTarget.filter(e => e.checked)
            mainTarget.indeterminate = false

            if (checkedElements.length === secondaryTarget.length) {
               mainTarget.checked = true
           } else if (checkedElements.length === 0) {
               mainTarget.checked = false
           } else {
               mainTarget.indeterminate = true
           }

       })
    })
}


function main() {

    const interests = document.querySelector("ul").children

    for (let value of interests) {
        let mainCheckBox = value.querySelector("input")
        let nestedCheckBox = Array.from(mainCheckBox.closest("li").querySelector("ul").querySelectorAll("input"))
        addListener(mainCheckBox, nestedCheckBox)
    }

}

main()
