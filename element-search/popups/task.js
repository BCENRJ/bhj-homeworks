let modalMain = document.getElementById("modal_main")
modalMain.classList.add("modal_active")
modalMain.getElementsByClassName("btn")[0].addEventListener("click", onClickModalMain)
function onClickModalMain () {
    modalMain.classList.remove("modal_active")
    document.getElementById("modal_success").classList.add("modal_active")
}

let modalClose = document.getElementsByClassName("modal__close_times")
Array.from(modalClose, (element) => {
    element.onclick = () => {
        element.parentElement.parentElement.classList.remove("modal_active")
    }
})
