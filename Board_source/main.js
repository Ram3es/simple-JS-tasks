const board  = document.getElementById("board")
const SQUARES_NUMBER = 840

let i = 0 
while (i < SQUARES_NUMBER ){
    const elem = document.createElement("div")
    elem.classList.add("square")
    board.append(elem)
    elem.addEventListener("mouseover", function(){
        const color = getRandomColor()
        this.style.backgroundColor= color
        this.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
    })
    elem.addEventListener("mouseleave", function(){
        this.style.backgroundColor= "#1d1d1d"
        this.style.boxShadow = `0 0 2px #000`
       
    })
    i++ ;   
}
 const getRandomColor = () =>{
     const lists = "0123456789ABCDEF"
     let color = "#"
     for(let i = 0; i< 6 ; i++){
        color = color.concat(lists[Math.floor(Math.random() * 16 )])
     }
     return color
 }
