let slider_item_active = "slider__item_active"
let slider_dot_active = "slider__dot_active"


function add_listener_slider(arrow, direction) {

    arrow.addEventListener("click", function () {

        let slider_items = document.body.getElementsByClassName("slider__item")
        let slider_dots = document.body.getElementsByClassName("slider__dot")
        if (direction === "prev") {
            slider_items = Array.from(slider_items)
            slider_dots = Array.from(slider_dots)
            slider_items.reverse()
            slider_dots.reverse()
        }

        for (let i = 0; i < slider_items.length; i++) {
            let item = slider_items[i]
            if (item.classList.contains(slider_item_active)){
                refresh_arrow_or_dots(slider_items, i, slider_item_active)
                refresh_arrow_or_dots(slider_dots, i, slider_dot_active)
                break
            }
        }
})
}

function add_listener_dots(dot) {

    dot.addEventListener("click", function () {
        let slider_items = document.body.getElementsByClassName("slider__item")
        let slider_dots = document.body.getElementsByClassName("slider__dot")

        for (let i = 0; i < slider_dots.length; i++) {
            if (slider_dots[i].classList.contains(slider_dot_active)) {
                slider_dots[i].classList.remove(slider_dot_active)
                slider_items[i].classList.remove(slider_item_active)
                break
            }

        }

        dot.classList.add(slider_dot_active)
        slider_dots = document.body.getElementsByClassName("slider__dot")
        for (let i = 0; i < slider_dots.length; i++) {
            if (slider_dots[i].classList.contains(slider_dot_active)) {
                slider_items[i].classList.add(slider_item_active)
            }
        }
    })

}

function refresh_arrow_or_dots(item, index, className) {
    item[index].classList.remove(className)
    if (index + 1 !== item.length) {
        item[index + 1].classList.add(className)
    } else {
        item[0].classList.add(className)
    }
}


function main(){
    let arrows = document.body.getElementsByClassName("slider__arrow")
    let dots = document.body.getElementsByClassName("slider__dot")

    for (let dot of dots) {
        add_listener_dots(dot)
    }
    for (let arrow of arrows) {
        if (arrow.classList.contains("slider__arrow_next")) {
            add_listener_slider(arrow)
        } else {
            add_listener_slider(arrow, "prev")
        }
    }
}

main()