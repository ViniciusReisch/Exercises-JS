function btn() {
    let idade = Number(prompt('Em que ano você nasceu? '))
    let ano = agora.getFullYear()
    let res = document.getElementById('res')
    res.innerHTML = `<p>Em ${ano} você completará <mark>${ano-idade}</mark></p>`
}