var zip = require('zip')

function wrapInTimeout(callback) {
    if (!callback()) {
        setTimeout(() => wrapInTimeout(callback), 500)
    }
}

function addListener() {
    var downloadAllButton = document.getElementsByClassName("SidebarMenu__sideMenuTop--3xCYh")[0]
    if (downloadAllButton == null) {
        return false
    }
    downloadAllButton.addEventListener("click", async () => {
        wrapInTimeout(zipFiles)
    })
    return true
}

function injectElements() {
    wrapInTimeout(addListener)
}

injectElements()

function zipFiles() {
    downloadButtons = document.getElementsByClassName("ThingFile__download--2SUQd");
    if (downloadButtons.length == 0) {
        return false
    }
    else {

        var allFiles = []
        // for (let downloadButton of downloadButtons) {
        fetch(downloadButtons[0].getAttribute("href"))
            .then(response => response.blob)
            .then(blob => allFiles.push(new File([blob], "Lalalala")))
            .then(number => alert(number))
        // .then(_ => window.FileSystem.pi)
        // }
        return true
    }
}