function colocarAndar(){
    andar = document.querySelector("#quartos").cloneNode(true)
    andar.id = "andar"
    andar.placeholder = "Andar do apartamento"
    document.querySelector("#entrar").appendChild(andar)
}

function tirarAndar(){
    andar = document.querySelector("#andar")
    document.querySelector("#entrar").removeChild(andar)
}

function escolherTipo(){
    quartos = parseInt(document.getElementById("quartos").value)
    metragem = parseInt(document.getElementById("metragem").value)
    preco = parseInt(document.getElementById("preco").value)
    casa = document.getElementById("casa").checked
    apartamento = document.getElementById("apartamento").checked

    total = 0    

    if(casa == true){
        switch(quartos){
            case 1:
                total = preco * metragem
                break
            case 2:
                total = preco * metragem * 1.2
                break
            case 3:
                total = preco * metragem * 1.5
                break
            default:
                alert("Não permitido")
                break
        }
    }else{
        andar = parseInt(document.getElementById("andar").value)
        switch(quartos){
            case 1:
                total = preco * metragem * andar/2
                break
            case 2:
                total = preco * metragem * 1.2 * andar/2
                break
            case 3:
                total = preco * metragem * 1.5 * andar/2
                break
            default:
                alert("Não permitido")
                break
        }
    }

    if(total>0)
        document.getElementById("total").innerHTML = "R$"+parseFloat(total)
    return false
}