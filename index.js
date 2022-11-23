const mainContainer = document.querySelector(".container")
const Second = document.querySelector(".second")

const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates=document.querySelectorAll(".circle")
submitButton.addEventListener("click",() =>{
    Second.classList.remove("hidden")
    mainContainer.style.display="none"
})

rates.forEach((rate)=> {
    rate.addEventListener("click",() =>{
        console.log(rate.innerHTML)
        rating.innerHTML=rate.innerHTML
    })
})
