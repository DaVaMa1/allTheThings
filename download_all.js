execute = true

function injectElements() {
    var button = document.getElementsByClassName("SidebarMenu__sideMenuTop--3xCYh")[0];
    if (button == null) {
        setTimeout(injectElements, 500)
    } else if (execute) {
        execute = false
        button.addEventListener("click", async () => {
            downloadButtons = document.getElementsByClassName("ThingFile__download--2SUQd");

            for (let buttony of downloadButtons) {
                window.open(buttony.getAttribute("href"))
            }
        });
    }

}
injectElements()
