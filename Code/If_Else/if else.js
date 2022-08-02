function changeText (){
    let pelement1 = document.getElementById("p1")
    let input1 = document.getElementById("input1");

    let number = Number(input1.value);

    let randomNumber = Math.floor(Math.random() * 10); //generates a random number between 0-10

    if (number % 2 === 0) {
        pelement1.innerText = "yes"
    } else {
        pelement1.innerText = "no"
    }

    let p2 = document.getElementById("p2")
    let p3 = document.getElementById("p3")

    p2.innerText = "Random number is: " + randomNumber

    if (randomNumber % 2 === 0) {
        p3.innerText = "yes"
    } else {
        p3.innerText = "no"
    }


   


   
}