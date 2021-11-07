const btnUp = document.querySelector(".up-button")
const btnDown = document.querySelector(".down-button")
const sidebar = document.querySelector(".sidebar")
const mainSlide = document.querySelector(".main-slide")
const container = document.querySelector(".container")

const countSlides = mainSlide.children.length

sidebar.style.top = `-${ (countSlides -1 ) *100}vh`;
let activeIdx = 0;

btnUp.addEventListener("click",()=>{
    changeSlide("up")
})
btnDown.addEventListener("click",()=>{
    changeSlide("down")
})

function changeSlide( direction ){
    if(direction === "up"){
        activeIdx++
        if(activeIdx === countSlides){
            activeIdx = 0
        }
    } else if (direction === "down"){
            activeIdx--
            if(activeIdx < 0 ){
                activeIdx = countSlides -1
            }
        

    }
    const height = container.clientHeight
    console.log(countSlides);

    mainSlide.style.transform = `translateY(-${activeIdx * height}px)`
    sidebar.style.transform = `translateY(${activeIdx * height}px)`
} 
