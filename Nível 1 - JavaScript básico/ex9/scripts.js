let cont = 0
let res = document.querySelector('section#resultados')
contador = 0
res.innerHTML = null


function cliques(){
    contador ++
    res.innerHTML = `O contador está com <mark>${contador}</mark> cliques`
}

function zerar(){
    contador = 0
    res.innerHTML = null
}