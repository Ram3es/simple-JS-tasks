(()=>{
 const active = document.querySelector(".item")
 const places = document.querySelectorAll(".placeholder")

places.forEach(placeholder => {
    placeholder.addEventListener("dragover",dragover);
    placeholder.addEventListener("dragenter",dragenter)
    placeholder.addEventListener("dragleave",dragleave)
    placeholder.addEventListener("drop",dragdrop)
}
)

active.addEventListener("dragstart",(e)=>{
    e.target.classList.add("isActive")
    setTimeout(()=> e.target.classList.add("hide"), 0)
   
})

active.addEventListener("dragend",()=>{
    console.log("end");
     active.classList.remove("isActive","hide")
     
})

function dragover(event){
    event.preventDefault() 
}
function dragenter(event){ 
    this.classList.add("hovered")
}
function dragleave(event){
    this.classList.remove("hovered");
}
function dragdrop(event){
    event.target.append(active)
    this.classList.remove("hovered");
}})()