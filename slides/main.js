const slides = document.querySelectorAll(".slide")



function slidesPlugin (){
    const active = Math.floor(Math.random() * (slides.length))
    
    
    slides[active].classList.add("active")
   
    slides.forEach(slide =>{
        slide.addEventListener("click", () =>{
            clearActive()
            slide.classList.add("active")
            setTimeout(()=>clearActive(), 2000)
            
        })
    })
    
    const clearActive = () =>{
     slides.forEach( slide =>slide.classList.remove("active"))
    }
}

slidesPlugin()

 