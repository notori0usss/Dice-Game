let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1
let diceImg1 = document.querySelector(".img1")
let diceImg2 = document.querySelector(".img2")
let imgSource1 = `images/dice${randomNumber1}.png`
let imgSource2 = `images/dice${randomNumber2}.png`

diceImg1.setAttribute("src", imgSource1)
diceImg2.setAttribute("src", imgSource2)

if (randomNumber1 > randomNumber2) {
  player1()
} else if (randomNumber1 === randomNumber2) {
  draw()
} else {
  player2()
}

function player1() {
  let p1 = document.querySelector("h1")
  p1.innerText = "Player 1 wins"
}
function draw() {
  let p1 = document.querySelector("h1")
  p1.innerText = "Draw"
}

function player2() {
  let p1 = document.querySelector("h1")
  p1.innerText = "Player 2 wins"
}
