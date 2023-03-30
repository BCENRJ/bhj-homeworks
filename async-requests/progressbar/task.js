const form = document.forms.form
const URL = form.action


function uploadBtn() {
    const progress = document.getElementById( 'progress' );
    const xhr = new XMLHttpRequest()
    let formData = new FormData(form);

    xhr.upload.onprogress = function (event) {
        progress.value = event.loaded / event.total;

    }
    xhr.onloadend = function () {
        if (!xhr.status.toString().startsWith("2")) {
            alert("error")
        }
    }

    xhr.open("POST", URL)
    xhr.send(formData)
}


function main() {
    const btnSend = document.getElementById("send")
    const file = document.getElementById("file")

    btnSend.addEventListener("click", ev => {
        ev.preventDefault()
        if (file.files.length !== 0) {
            uploadBtn()
        }
    })
}

main()
