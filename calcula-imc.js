//chamando a var que atribui a tag h1, podemo mudar o texto da tag pelo atributo .textContent
var titulo = document.querySelector(".titulo");
titulo.textContent = "Ana Nutrição";

// selecionado a class que contem as informações desejadas (all) pega um array
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];
  // var tdpeso recebe a informação da classe info-peso
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var altura = tdAltura.textContent;
  // var peso recebe o conteudo de texto da var tdpeso (o valor)
  var peso = tdPeso.textContent;

  var imc = peso / (altura * altura);

  // Validando se o peso e altura são validos para o calculo
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
    //Adicionando uma nova classe ao elemento
    paciente.classList.add("paciente-invalido");
  }

  // caso haja erro mudamos a classe da linha que tera um novo estilo para destacar o erro
  if (!alturaValida) {
    console.log("Altura inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
    //Adicionando uma nova classe ao elemento
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; //toFixed = numero de casas decimais
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}
