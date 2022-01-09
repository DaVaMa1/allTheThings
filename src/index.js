var JSZip = require("jszip");
var fileSaver = require("file-saver");

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

async function zipFiles() {
    var downloadButtons = document.getElementsByClassName("ThingFile__download--2SUQd");
    if (downloadButtons.length == 0) {
        return false
    }
    else {

        var zip = new JSZip();
        for (let downloadButton of downloadButtons) {
            var response = await fetch(downloadButton.getAttribute("href"))
            var filename = response.url.split('/').pop()
            var blob = await response.blob()
            zip.file(filename, blob)
        }

        zip.generateAsync({ type: "blob" })
            .then((content) => {
                saveAs(content, "example.zip");
            });
        return true
    }
}