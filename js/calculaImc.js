//mudando o nome 
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//-------------------------------------------------------------------------------

// selecionado todos os pacientes da tabela e colocando dentro de uma lista 
let pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i]

    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.textContent

    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.textContent
    
    let imcTd = paciente.querySelector('.info-imc')

    //toFixed para ajustar as casas decimais
    let imc = calculaImc(peso, altura)
    imcTd.textContent = imc
}

function calculaImc (peso, altura) {
    let imc = 0

     imc = peso / (altura * altura)
    return imc.toFixed(2)

    
}




