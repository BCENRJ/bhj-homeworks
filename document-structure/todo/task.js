function newTask(text) {
    let task = document.createElement("div")
    let taskTitle = document.createElement("div")
    let taskRemove = document.createElement("a")
    task.className = "task"
    taskTitle.className = "task__title"
    taskTitle.textContent = text
    taskRemove.className = "task__remove"
    taskRemove.href = "#"
    taskRemove.innerHTML = "&times;"
    taskRemove.addEventListener("click", ev => {task.remove()})
    task.append(taskTitle, taskRemove)
    return task
}



function addTask(taskList, taskInput) {
    let inputValue = taskInput.value.trim()
    if (inputValue !== "") {
        taskList.insertAdjacentElement("beforeend", newTask(inputValue))
    }

}


function main(storage) {


    const taskList = document.getElementById("tasks__list")
    const taskInput = document.getElementById("task__input")
    const buttonAdd = document.getElementById("tasks__add")

    buttonAdd.addEventListener("click", ev => {
        addTask(taskList, taskInput)
        taskInput.value = ""

        ev.preventDefault()
    })

    storage = window.localStorage

    window.onload = function (e) {

        let rawData = storage.getItem("tasks")
        let parsedData = JSON.parse(rawData)

        if (parsedData && parsedData.length > 0) {
            parsedData.forEach(elem => {taskList.insertAdjacentElement("beforeend", newTask(elem))})
        }

    }


    window.onunload = function (ev) {
        let taskTitles = taskList.querySelectorAll(".task__title")
        let data = Array.from(taskTitles, (elem) => {return elem.textContent.trim()})
        storage.setItem("tasks", JSON.stringify(data))

    }


}


main()





