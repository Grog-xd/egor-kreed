let pouap = document.getElementById("pouap")
let back = document.getElementById("back")
let yes = document.getElementById("yes")
let no = document.getElementById("no")

setTimeout(fpouap, 1000)

function fpouap(){
    pouap.classList.remove("hiden")
}
back.addEventListener("click", () => {
    pouap.classList.add("hiden")
})
yes.addEventListener("click", () => {
    pouap.classList.add("hiden")
})
no.addEventListener("click", () => {
    pouap.classList.add("hiden")
})