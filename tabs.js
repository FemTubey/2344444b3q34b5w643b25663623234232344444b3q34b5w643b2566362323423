function openTab(tabName) {

    let contents = document.getElementsByClassName("tabContent");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    let buttons = document.getElementsByClassName("tabButton");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");

    event.currentTarget.classList.add("active");
}
