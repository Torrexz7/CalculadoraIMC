let calcular = document.getElementById('calcular')

function imc() {
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let nome = document.getElementById('nome').value
    let resultado = document.getElementById('resultado')
    if (nome !== "" && peso !== "" && altura !== "") {
        let valorIMC = (peso / (altura * altura)).toFixed(2)
        resultado.textContent = valorIMC
        let classificacao = ""
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso'
        }else if (valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns'
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso'
        }else if (valorIMC < 35){
            classificacao = 'obesidde grau I'
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau II'
        }else {
            classificacao = 'obesidade grau III. Cuidado'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`
    }else{
        resultado.textContent = 'preencha todos os campos'
    }
}


calcular.addEventListener('click', imc)