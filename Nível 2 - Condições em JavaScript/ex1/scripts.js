function media(){
    let name = prompt('Escreva seu nome: ')
    let nota1 = Number(prompt('Escreva sua primera nota: '))
    let nota2 = Number(prompt('Escreva sua primera nota: '))
    media = (nota1 + nota2) / 2

    let resultado = document.querySelector('section#resultado')
    resultado.innerHTML = `<p> Calculando a média final de ${name} <\p> 
        <p> As notas obtidas foram <mark> ${nota1} e ${nota2} <\mark>. 
        <p> A média final será <mark>${media}<\mark>.<\p>`
    if(media >= 6){
        resultado.innerHTML = `A mensagem que temos é: <strong style='color:red;'> Meus parabéns! </strong> `
    } else {
        resultado.innerHTML = `A mensagem que temos é: <strong style='color:red;'> Estude um pouco mais! </strong> `
    }
}