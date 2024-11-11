document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let dica = "1234"
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        document.getElementById("dica").innerHTML = "";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";
    

    if (imc < 18.6) {
        classificacao = "Abaixo do peso";
        dica = "É importante procurar um médico ou um(a) nutricionista para lhe auxiliar com ganho de peso!";
        
    } else if (imc < 25) {
        classificacao = "Peso normal";
        dica = "Continue se alimentando bem, e se exercite sempre que possível!";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        dica = "Seria interessante procurar algum médico ou nutricionista para uma análise e/ou uma reeducação alimentar!";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
        dica = "Seria interessante procurar um médico para tratamento adequado e/ou um(a) nutricionista para uma reeducação alimentar!";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
        dica = "Seria interessante procurar um médico para tratamento adequado e/ou um(a) nutricionista para uma reeducação alimentar!";
    } else {

        classificacao = "Obesidade grau III";
        dica = "Seria interessante procurar um médico para tratamento adequado e/ou um(a) nutricionista para uma reeducação alimentar!";
    }

    // Exibindo o resultado
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)}. <br>Classificação: ${classificacao}`;
    document.getElementById("dica").innerHTML = dica;
});


// Alternando temas com o botão
const botaoRedondo = document.getElementById('botaoRedondo');

botaoRedondo.addEventListener('click', () => {
    document.body.classList.toggle('dark'); 

    if (document.body.classList.contains('dark')) {
        botaoRedondo.textContent = '☀️'; 
    } else {
        botaoRedondo.textContent = '🌙'; 
    }
});