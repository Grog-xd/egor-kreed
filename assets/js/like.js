let like1 = document.getElementById("like1")
let dislike1 = document.getElementById("dislike1")

let like2 = document.getElementById("like2")
let dislike2 = document.getElementById("dislike2")

let like3 = document.getElementById("like3")
let dislike3 = document.getElementById("dislike3")


like1.addEventListener("click", () => {
    /* like1.classList.add("hiden") */
    dislike1.style.transform= "scale(1)"
    like1.style.transform= "scale(0)"
})

like2.addEventListener("click", () => {
    /* like1.classList.add("hiden") */
    dislike2.style.transform= "scale(1)"
    like2.style.transform= "scale(0)"
})

like3.addEventListener("click", () => {
    /* like1.classList.add("hiden") */
    dislike3.style.transform= "scale(1)"
    like3.style.transform= "scale(0)"
})

dislike1.addEventListener("click", () => {
    /* like1.classList.remove("hiden") */
    dislike1.style.transform= "scale(0)"
    like1.style.transform= "scale(1)"
})

dislike2.addEventListener("click", () => {
    /* like1.classList.remove("hiden") */
    dislike2.style.transform= "scale(0)"
    like2.style.transform= "scale(1)"
})

dislike3.addEventListener("click", () => {
    /* like1.classList.remove("hiden") */
    dislike3.style.transform= "scale(0)"
    like3.style.transform= "scale(1)"
})