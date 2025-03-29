const button1 = document.querySelector(".b1")
const elem1 = document.querySelector("body")
const elem2 = document.querySelector(".h2")

button1.addEventListener("click", () => {
    button1.style.backgroundColor = "purple"
    elem1.style.backgroundImage = "url(5de.jpg)"
    elem2.textContent = "WIZARDS"
})