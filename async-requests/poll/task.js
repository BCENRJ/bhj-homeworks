const URL = "https://students.netoservices.ru/nestjs-backend/poll"

function createBtnElms(textArr, feedback) {
    return Array.from(textArr, (text) => {
        let newEl = document.createElement("button")
        newEl.className = "poll__answer"
        newEl.textContent = String(text)

        newEl.addEventListener("click", ev => {feedback.style.visibility = "visible"})

        return newEl
    })
}

function appendAnswers(answerEl, arrayElems) {
    arrayElems.forEach(e => {answerEl.append(e)})
}


function createForm() {
    const div = document.createElement("div")
    div.className = "feedback"
    const a = document.createElement("a")
    a.href = "#"
    a.textContent = "закрыть"
    a.className = "feedback__btn"
    const p = document.createElement("p")
    p.textContent = "Спасибо, ваш голос засчитан!"
    const hr = document.createElement("hr")
    div.append(p, hr, a)
    document.body.append(div)
    a.addEventListener("click", ev => {div.style.visibility = "hidden"})
}

function main() {

    const title = document.getElementById("poll__title")
    const answers = document.getElementById("poll__answers")
    const feedback = document.querySelector(".feedback")

    const xhr = new XMLHttpRequest()
    xhr.open("GET", URL)
    xhr.responseType = "json"
    xhr.send()
    xhr.onloadend = function () {
        if (xhr.status !== 200) {
            return
        }
        const data = xhr.response["data"]
        const dataTitle = data["title"]
        const dataAnswers = data["answers"]

        title.textContent = dataTitle
        appendAnswers(answers, createBtnElms(dataAnswers, feedback),)

  }
}

createForm()
main()