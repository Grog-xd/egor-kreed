let imgs = document.getElementById("imgs")
let btn1 = document.getElementById("before")
let btn2 = document.getElementById("next")

const img = document.querySelectorAll('#imgs div')

let idx = 0

let interval = setInterval(run, 5000)

function run(){
    idx++
    changeBlock()
}

function changeBlock(){
    if (idx > img.length - 1){
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 546}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 5000)
}

btn2.addEventListener('click', () => {
    idx++
    changeBlock()
    resetInterval()
})
btn1.addEventListener('click', () => {
    idx--
    changeBlock()
    resetInterval()
})