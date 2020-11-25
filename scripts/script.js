// Inputs numbers

var numberA = document.querySelector("#numberA");
var numberB = document.querySelector("#numberB");

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

  var sum = document.querySelector("#sum");

  // String para int

  sum.value = parseInt(numberA) + parseInt(numberB);
}

function subtration1Numbers(numberA, numberB) {

  var sub1 = document.querySelector("#sub1");

  sub1.value = parseInt(numberA) - parseInt(numberB);

}

function subtration2Numbers(numberA, numberB) {

  var sub2 = document.querySelector("#sub2");

  sub2.value = parseInt(numberB) - parseInt(numberA);

}

function multipleNumbers(numberA, numberB) {

  var multiplication = document.querySelector("#multiplication");

  multiplication.value = parseInt(numberA) * parseInt(numberB);

}

// TO DO: divisão por 0.

function division1Numbers(numberA, numberB) {

  var div1 = document.querySelector("#div1");

  div1.value = parseInt(numberA) / parseInt(numberB);

}

function division2Numbers(numberA, numberB) {

  var div2 = document.querySelector("#div2");

  div2.value = parseInt(numberB) / parseInt(numberA);

  // TO DO: toFixed(2)
}

function squaredNumberA(numberA) {

  var squaredA = document.querySelector("#squaredA");

  squaredA.value = Math.pow(numberA, 2);
}

function squaredNumberB(numberB) {

  var squaredB = document.querySelector("#squaredB");

  squaredB.value = Math.pow(numberB, 2);
}

function dividersNumberA(numberA) {

  var dividersA = document.querySelector("#dividersA");

  var allDividers = []

  // Percorrer os números e avaliar se % é 0

  for (var i = 0; i <= numberA; i++) {

    // Transformar cada item numa String

    if (numberA % i == 0) {
			allDividers.push(i.toString());
    }
  }

  // Join: separa por virgula

	var numbersDividers = "(" + allDividers.length + ")";
  dividersA.value = allDividers.join(", ") + " " + numbersDividers;
}

function dividersNumberB(numberB) {

  var dividersB = document.querySelector("#dividersB");

  var allDividers = []

  for (var i = 0; i <= numberB; i++) {

    if (numberB % i == 0) {
			allDividers.push(i.toString());
    }
  }

	var numbersDividers = "(" + allDividers.length + ")";
  dividersB.value = allDividers.join(", ") + " " + numbersDividers;
}

// TO DO: formatar número > 1000

function factorialNumberA(numberA) {

  var factorialA = document.querySelector("#factorialA");

  var result = 1;

  // For: numberA até 1. Incrementar multiplicação
  // Condição maior que 21

  if (numberA < 22) {

    for (var i = numberA; i >= 1; i--) {
      result *= i;
    }
  
    // String: input fatorial é text

    factorialA.value = result.toString();

  } else {
    factorialA.value = "Número muito grande"
  }

}

function factorialNumberB(numberB) {

  var factorialB = document.querySelector("#factorialB");
  
  var result = 1;

  if (numberB < 22) {

    for (var i = numberB; i >= 1; i--) {
      result *= i;
    }
  
    factorialB.value = result.toString();

  } else {
    factorialB.value = "Número muito grande"
  }
}