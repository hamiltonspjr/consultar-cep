const btnConsult = document.querySelector('[data-cep="btn"]');
const btnClean = document.querySelector('[data-cep="btn-clean"]');
const cepUser = document.querySelector('[data-cep="input"]');

function cepConsult() {
    if(cepUser.value.length === 8){
        const cep = fetch(`https://viacep.com.br/ws/${cepUser.value}/json/`);
    cep.then(resolve => resolve.json())
    .then(cep => {
        document.querySelector('[data-cep="logradouro"]').innerText = cep.logradouro;
        document.querySelector('[data-cep="complemento"]').innerText = cep.complemento;
        document.querySelector('[data-cep="bairro"]').innerText = cep.bairro;
        document.querySelector('[data-cep="cidade"]').innerText = cep.localidade;
        document.querySelector('[data-cep="uf"]').innerText = cep.uf;
        document.querySelector('.informations-container').classList.add('show');
    })
    } else {
        alert('Cep inválido, digite um cep valido contendo 8 digitos');
    }
    
}

function clearValues() {
    cepUser.value = "";
    document.querySelector('.informations-container').classList.remove('show');
}

btnConsult.addEventListener('click', cepConsult);
btnClean.addEventListener('click', clearValues);