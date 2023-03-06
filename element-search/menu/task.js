function get_nested_menu() {
    let menu_link = document.body.querySelectorAll("li")
    let res = []
    Array.from(menu_link, (element) => {
        let child = element.querySelector("ul")
        if (child) {
            res.push(child)
        }
    })
    return res
}

function disable_link(nested_menu) {
    Array.from(nested_menu, (child) => {
        let node_list = child.querySelectorAll("li")
        Array.from(node_list, (element) => {
            element.querySelector("a").onclick = () => {return false}
        })
    })
}

function add_event_listeners(nested_menu) {
    Array.from(nested_menu, (child) => {
        child.closest("li").querySelector("a").addEventListener("click", function (e) {
            for (let value of nested_menu) {
                value.classList.remove("menu_active")
            }
            child.classList.add("menu_active")
            e.preventDefault()
        })
    })
}

function start() {
    let nested_menu = get_nested_menu()
    disable_link(nested_menu)
    add_event_listeners(nested_menu)
}

start()

