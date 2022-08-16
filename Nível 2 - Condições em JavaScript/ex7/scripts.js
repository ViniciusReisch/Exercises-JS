function btn1() {
    let min = 1
    let max = 100
    let dif = max - min
    let random = Math.random(1,100)
    let num = min + Math.trunc(dif * random)
    let res = document.querySelector('section#res')
    res.innerHTML = `<p>Acabei de pensar no número <mark>${num}!</mark></p>`
}

function btn2() { 
    let res = document.querySelector('section#res')
    res.innerHTML = null
}