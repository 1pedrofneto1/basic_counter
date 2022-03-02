let lista = []
function inserir(){
    let n1 =  Number(window.document.getElementById('add').value)
    let caixa = window.document.getElementById('add')
    // Erro se por um número fora do paramêtro
    if(n1 > 100 || n1 < 1){
        window.alert('[ERRO] O número não pode ser maior que 100 ou menor que 1!')
    }
    // Erro se já tiver o número na lista
    else if(lista.indexOf(n1)!=-1){
        window.alert('[ERRO] Número já contido na lista!')
    }
    // Adicionar número na array
    else{
        let select = window.document.getElementById('select')
        lista.push(n1) 
        let option = window.document.createElement('option')
        option.text = `Valor ${n1} adicionado!`
        select.appendChild(option)   
        window.document.getElementById('result2').innerHTML = ''
    } 
    caixa.value = ""
    caixa.focus()
}
function finalizar(){
    // Erro se finalizar sem digitar nada
    if(lista.length == [0]){
        window.alert('[ERRO] Digite algo antes de finalizar!')
    }
    else{
    lista.sort()
    let soma = 0
    // Somar todos os números de uma array
    for(let i = 0; i < lista.length; i++){
         soma += lista[i]
    }
    window.document.getElementById('result2').innerHTML = 
    (`*A lista tem ${lista.length} itens </br>
    *O maior número é ${Math.max(...lista)} </br>
    *O menor número é ${Math.min(...lista)} </br>
    *A soma de todos os compontes é ${soma} </br>
    *A média somando todos os componentes é ${soma/2}`)
}
}