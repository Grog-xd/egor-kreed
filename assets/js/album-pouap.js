let album1 = document.getElementById("a1")
let album2 = document.getElementById("a2")
let pouap1 = document.getElementById("album1")
let pouap2 = document.getElementById("album2")
let back1 = document.getElementById("albom1-back")
let back2 = document.getElementById("albom2-back")

album1.addEventListener("click", () => {
    pouap1.classList.toggle("hiden")
})
album2.addEventListener("click", () => {
    pouap2.classList.toggle("hiden")
})
back1.addEventListener("click", () => {
    pouap1.classList.add("albums__slider__block__pouap hiden")
})
back2.addEventListener("click", () => {
    pouap2.classList.add("albums__slider__block__pouap hiden")
})