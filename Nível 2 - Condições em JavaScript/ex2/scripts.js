function btn() {
    let num = Number(prompt('Escreva o número: '))
    res = document.querySelector('section#res')
    if (num % 2 == 0){
        res.innerHTML = `<p> O número é <strong> PAR <\strong> <\p>`
    } else {
        res.innerHTML = `<p> O número é <strong> ÍMPAR <\strong> <\p>`
    }
         
}