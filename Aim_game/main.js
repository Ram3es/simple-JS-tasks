const startBtn = document.getElementById("start")
const screens = document.querySelectorAll(".screen")
const selectTimeBtns = document.querySelector("#time-list")
const timeEl = document.querySelector("#time")
const board = document.getElementById("board")
const input = document.querySelector("[type=text]")



let time = 0
let score = 0


startBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    screens[0].classList.add("up")
})

input.addEventListener("keydown", (e)=>{
    if(e.keyCode === 13){
    time = e.target.value < 10 ? `0${e.target.value}`: e.target.value
    screens[1].classList.add("up")
    startGame()
    }
})

selectTimeBtns.addEventListener("click", listener)

function listener(e){
    if(e.target.hasAttribute("data-time")){
        time = parseInt(e.target.getAttribute("data-time"));
        screens[1].classList.add("up")
        startGame()
}  
  }

board.addEventListener("click", e =>{
  if(e.target.classList.contains("circle")){
    score++
    e.target.remove()
    createRundomCircle()

  }
})

const startGame = () =>{
    setTime(time)
    createRundomCircle()
    setInterval(tick ,1000)
  
    
}

function tick(){
    if(time < 0){
        finishGame()

    } else {
    let current =  time--
       if(current < 10){
           current = `0${current}`
       }
        setTime(current)
    }
}
function setTime (value){
    timeEl.innerHTML = `00:${value}`
}

function createRundomCircle(){
    const circle = document.createElement("div")
    circle.classList.add("circle")
    const size = getRandomNumber(10,50)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    const color = getRundomClor()
    
    
    circle.style.background = color
    circle.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

function getRandomNumber(min, max){
  return Math.round( Math.random() * (max - min) + min )
}

function finishGame(){
    board.innerHTML = `<h1>Cчёт:<span class="primary">${score}</span></h1>`
    timeEl.parentNode.classList.add("hide")
}

function getRundomClor(){
   const pallete = ["red","blue","white","yellow","green","violet","orange"]
    return pallete[Math.floor(Math.random() * (pallete.length))]
}