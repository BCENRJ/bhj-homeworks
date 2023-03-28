function tooltipCreate(text, x, y) {
    let elem = document.createElement("div")
    elem.classList.add("tooltip", "tooltip_active")
    elem.textContent = text
    elem.style.cssText = `left: ${x}px; top: ${y}px`
    return elem
}

function tooltipRemove(tooltip) {
    if (tooltip) {
        tooltip.remove()
    }
}

function main() {

    const hasTooltip = document.querySelectorAll(".has-tooltip")

    for (let i = 0; i < hasTooltip.length; i++) {
        hasTooltip[i].addEventListener("click", evt => {
            let selectedTitle = hasTooltip[i].title


            let tooltip = document.querySelector(".tooltip")
            tooltipRemove(tooltip)

            let x = hasTooltip[i].offsetLeft
            let y = hasTooltip[i].offsetTop

            let _ = (tooltip && tooltip.textContent === selectedTitle) ? true : document.body.insertAdjacentElement("beforeend", tooltipCreate(selectedTitle, x, y + 20))

            evt.stopImmediatePropagation()
            evt.preventDefault()
        })
    }

    document.body.addEventListener("click", evt => {
        let tooltip = document.querySelector(".tooltip")
        tooltipRemove(tooltip)
    })
}

main()