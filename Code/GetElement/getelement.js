console.log("I worked")

function changeheadertext(string1, string2){
    let header = document.getElementById("header1")
    header.innerText = string1 + string2
}

function changeHeaderColor() {
    let header = document.getElementById("header1")
    header.style.color = "blue"
}
    

let button = document.getElementById("button1")
button.addEventListener("click", changeHeaderColor)