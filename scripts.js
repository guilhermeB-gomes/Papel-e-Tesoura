const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")


function handleOptionClick(event) {
    const clicketImage = event.currentTarget

    container.classList.add("start")
    resultText.textContent = "..."

    setTimeout(() => {
        container.classList.add("start")
        
        
        
        
        
        resultText.textContent = "X Ganhou"

    }, 2000);
}



optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})

