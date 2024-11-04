function consultaEndereco(){
    let cep = document.querySelector('#cep').value ;
     
    if (cep.length !== 8){
        alert('CEP Invalido !!');
        return
    }
     
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch (url).then(function(response ){
        response.json().then(mostrarEndereco);
          
        })
        
    

}

 function mostrarEndereco(dados){
    let resultado = document.querySelector('#resultado')
    if (dados.erro){
        resultado.innerHTML = "Nao foi possivel localizar endereco!!"
    }else {
        resultado.innerHTML = `<p>Endereco: ${dados.logradouro} </p>
                              <p>Complemento: ${dados.complemento}</p>
                              <p>Bairro: ${dados.bairro}</p> 
                              <p>Cidade: ${dados.localidade}- ${dados.uf}</p>
                              <p>Estado: ${dados.estado}</p>
                              <p>ddd: ${dados.ddd}</p>`
    }
     
    


 }