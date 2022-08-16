function btn() {
    let num1 = Number(prompt('Escreva o número: '))
    let num2 = Number(prompt('Escreva o número: '))
    res = document.querySelector('section#res')
    if (num1 > num2){
        res.innerHTML = `<p> Analisando os valores ${num1} e ${num2}, <strong> o maior é ${num1} <\strong> <\p>`
    } else if (num1 < num2){
        res.innerHTML = `<p> Analisando os valores ${num1} e ${num2}, <strong> o maior é ${num2} <\strong> <\p>`
    } else {
        res.innerHTML = `<p> Analisando os valores ${num1} e ${num2}, <strong> ambos são IGUAIS <\strong> <\p>`
    }         
}