let fruits = [];

function addFruit() {
    let value = document.getElementById("textbox").value;
    fruits.push(value);
    
    let fruitString = "";
    for (let i = 0; i < fruits.length; i++) {
        fruitString += fruits[i] + "<br>";
    }

    document.getElementById("demo").innerHTML = fruitString;
}



