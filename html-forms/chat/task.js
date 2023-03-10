const messages = document.querySelector(".chat-widget__messages")

const listMessages = ["Кто тут?", "Где ваша совесть?", "Добрый день!", "Пока", "Бла-Бла", "Мы закрыты",
                      "Добрый день, мы ещё не проснулись. Позвоните через 10 лет"]

function createElement(tagName, className, innerText) {
    let newElem = document.createElement(tagName)
    newElem.className = className
    if (innerText) {
        newElem.innerText = innerText
    }
    return newElem
}


function nowTime() {
    let now = new Date()
    let getHour = now.getHours() < 10 ? `0${now.getHours()}`: `${now.getHours()}`
    let getMin = now.getMinutes() < 10 ? `0${now.getMinutes()}`: `${now.getMinutes()}`
    return {hour: getHour, min: getMin}
}

function msgHtml(value, robot) {
    let msgType = robot ? "message" : "message message_client"
    let time = nowTime()

    const msgDiv = createElement("div", msgType)
    const msgTime = createElement("div", "message__time", `${time.hour}:${time.min}`)
    const msgText =  createElement("div", "message__text", value)

    msgDiv.append(msgTime, msgText)
    return msgDiv
}



function onClickWidgetBtn(widget) {

    widget.onclick = () => {
        if (!widget.classList.contains("chat-widget_active")) {
            widget.classList.add("chat-widget_active")
        }

    }
}

function randomPickFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
}



function main() {

    const chatWidget = document.querySelector(".chat-widget")

    const chatWidgetInput = document.getElementById("chat-widget__input")
    const chatArea = document.querySelector(".chat-widget__messages-container")

    onClickWidgetBtn(chatWidget)

    chatWidgetInput.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        let inputValue = e.target.value.trim()
        if (inputValue!== "") {
            messages.appendChild(msgHtml(inputValue, false))
            e.target.value = ""
            messages.appendChild(msgHtml(randomPickFromList(listMessages), true))
            chatArea.scrollTop = chatArea.scrollHeight

      }
    }


})

}

main()