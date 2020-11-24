// Inputs numbers

var numberA = document.querySelector("#numberA");
var numberB = document.querySelector("#numberB");

// Inputs - resultados

var sum = document.querySelector("#sum");
var sub1 = document.querySelector("#sub1");
var sub2 = document.querySelector("#sub2");
var multiplication = document.querySelector("#multiplication");
var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var squaredA = document.querySelector("#squaredA");
var squaredB = document.querySelector("#squaredB");
var dividersA = document.querySelector("#dividersA");
var dividersB = document.querySelector("#dividersB");
var factorialA = document.querySelector("#factorialA");
var factorialB = document.querySelector("#factorialB");

function start() {
  getNumberA();
  getNumberB();
}

start();

// Pegar valor quando usuário apertar enter

function getNumberA() {
  window.addEventListener('keyup', getValueA);

  function getValueA(event) {
    if (event.key === "Enter") {
      console.log(numberA.value);

      // Focus input number B

      numberB.focus();

      // Chamar funções

      squaredNumberA(numberA.value);
      dividersNumberA(numberA.value);
      factorialNumberA(numberA.value);
    }
  }
}

function getNumberB() {
  window.addEventListener('keyup', getValueB);

  function getValueB(event) {
    if (event.key === "Enter") {
      
      // Chamar funções

      sumNumbers(numberA.value, numberB.value);
      subtration1Numbers(numberA.value, numberB.value);
      subtration2Numbers(numberA.value, numberB.value);
      multipleNumbers(numberA.value, numberB.value);
      division1Numbers(numberA.value, numberB.value);
      division2Numbers(numberA.value, numberB.value);

      squaredNumberB(numberB.value);
      dividersNumberB(numberB.value);
      factorialNumberB(numberB.value);
    }
  }
}

function sumNumbers(numberA, numberB) {

  // String para int

  sum.value = parseInt(numberA) + parseInt(numberB);
}

function subtration1Numbers(numberA, numberB) {

  sub1.value = parseInt(numberA) - parseInt(numberB);

}

function subtration2Numbers(numberA, numberB) {

  sub2.value = parseInt(numberB) - parseInt(numberA);

}

function multipleNumbers(numberA, numberB) {

  multiplication.value = parseInt(numberA) * parseInt(numberB);

}

function division1Numbers(numberA, numberB) {

  div1.value = parseInt(numberA) / parseInt(numberB);

}

function division2Numbers(numberA, numberB) {

  div2.value = parseInt(numberB) / parseInt(numberA);

  // TO DO: toFixed(2)
}

function squaredNumberA(numberA) {
  squaredA.value = Math.pow(numberA, 2);
}

function squaredNumberB(numberB) {
  squaredB.value = Math.pow(numberB, 2);
}

function dividersNumberA(numberA) {

  var allDividers = ""

  // Percorrer os números e avaliar se % é 0

  for (var i = 0; i <= numberA; i++) {

    if (numberA % i == 0) {
      allDividers += (i.toString() + ", ")
    }
  }

  dividersA.value = allDividers
}

// TO DO: tirar vírgula e mostrar quantidade de divisores (3)

function dividersNumberB(numberB) {

  var allDividers = ""

  for (var i = 0; i <= numberB; i++) {

    if (numberB % i == 0) {
      allDividers += (i.toString() + ", ")
    }
  }

  dividersB.value = allDividers
}

function factorialNumberA(numberA) {

  var result = 1;

  // For: numberA até 1. Incrementar multiplicação

  for (var i = numberA; i >= 1; i--) {
    result *= i;
  }

  factorialA.value = result;
}

function factorialNumberB(numberB) {
  
  var result = 1;

  for (var i = numberB; i >= 1; i--) {
    result *= i;
  }

  factorialB.value = result;
}