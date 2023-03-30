const URL = "https://students.netoservices.ru/nestjs-backend/slow-get-courses"


function createCurrencyElems(code, value, currency) {
    const obj = {"item__code": code, "item__value": value, "item__currency": currency}
    const arr = Object.entries(obj).map(([k, v]) => {
        let el = document.createElement("div")
        el.className = k
        el.textContent = String(v)
        return el
    })
    const parent = document.createElement("div")
    parent.className = "item"
    arr.forEach(e => {parent.append(e)})
    return parent
}


function showResult(loader, items, data) {
    loader.classList.remove("loader_active")
    Object.entries(data["Valute"]).map(([key, value]) => {
        items.insertAdjacentElement(
                "beforeend",
                createCurrencyElems(value["CharCode"], value["Value"], "руб."))
        })
}


function main() {
    const storage = window.localStorage

    const items = document.getElementById("items")
    const loader = document.getElementById("loader")

    const rawData = storage.getItem("data")
    const parsedData = JSON.parse(rawData)
    let checkLoaded = true
    if (parsedData) {
        showResult(loader, items, parsedData)
        checkLoaded = false
    }


    const xhr = new XMLHttpRequest()
    xhr.open("GET", URL)
    xhr.responseType = "json"
    xhr.send()
    xhr.onloadend = function () {
        if (xhr.status !== 200) {
            return
        }
        const data = xhr.response.response
        if (checkLoaded) {
            showResult(loader, items, data)
        }
        storage.setItem("data", JSON.stringify(data))

    }

}

main()
