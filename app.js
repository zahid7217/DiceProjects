const button = document.getElementById("roll");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

const value = document.querySelector('#target');
button.disabled = false;
button.addEventListener('click', setDice)
let number = 1;
value.addEventListener('change', function () {
    number = parseInt(this.value);
})

function setDice() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;
    let src1 = "images/" + num1 + "b.png";
    let src2 = "images/" + num2 + "r.png";
    dice1.src = src1;
    dice2.src = src2;
    if (num1 === number && num2 === number) {
        document.querySelector("#h1").innerHTML = "DRAW!!";
        button.disabled = true;
        button.style.backgroundColor = 'red';
        document.querySelector("#h2").innerHTML = "Please Refresh the page.";
    }
    else if (num1 === number) {
        document.querySelector("#h1").innerHTML = "Player 1 Wins!!";
        button.disabled = true;
        button.style.backgroundColor = 'red';
        document.querySelector("#h2").innerHTML = "Please Refresh the page.";
    }
    else if (num2 === number) {
        document.querySelector("#h1").innerHTML = "Player 2 Wins!!";
        button.disabled = true;
        button.style.backgroundColor = 'red';
        document.querySelector("#h2").innerHTML = "Please Refresh the page.";
    }
}