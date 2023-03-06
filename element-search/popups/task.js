let modal_main = document.getElementById("modal_main")
modal_main.classList.add("modal_active")
modal_main.getElementsByClassName("btn")[0].addEventListener("click", on_click_modal_main)
function on_click_modal_main () {
    modal_main.classList.remove("modal_active")
    document.getElementById("modal_success").classList.add("modal_active")
}

let model_close = document.getElementsByClassName("modal__close_times")
Array.from(model_close, (element) => {
    element.onclick = () => {
        element.parentElement.parentElement.classList.remove("modal_active")
    }
})
