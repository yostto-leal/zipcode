function consultaEndereco(){

    let url = `https://viacep.com.br/ws/${cep}/json/ `

    fetch (url).then(function(response) {
        response.json().then(mostraEndereco)
    })
}

function mostraEndereco(dados){
    let resultado = document.querySelector('#resultado')
    if (dados.erro){
        resultado.innerHTML = " Não foi possivel localizar o endereço !!"
    }else{
        resultado.innerHTML = `<p>Endereco: ${dados.logradouro} </p>
        <p>Complemento: ${dados.complemento}</p>
        <p>Bairro: ${dados.bairro}</p> 
        <p>Cidade: ${dados.localidade}- ${dados.uf}</p>
        <p>Estado: ${dados.estado}</p>
        <p>ddd: ${dados.ddd}</p>`
}

    
}