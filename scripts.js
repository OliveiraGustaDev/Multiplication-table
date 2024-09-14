// Seleção de Elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const myTitle = document.querySelector("#title");

const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);

const cleanBtn = document.querySelector("#clean");
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// Funções

const cleanAll = () => {
  number.value = "";
  multiplicator.value = "";

  multiplicationTitle.innerText = "";
  multiplicationTable.innerHTML =
    "Informe um número para calcular uma Tabuada...";

  myTitle.innerHTML = "Digite o número e confirme para gerar a tabuada";
};

const createTable = (number, multiplicator) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicator; i++) {
    const result = number * i;

    const template = `<div class="row">
    <div class="operations"> ${number} x ${i} = </div>
    <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);

    multiplicationTitle.innerText = number;

    myTitle.innerHTML = "Tabuada Gerado com Sucesso!";
  }
};

// Eventos

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const number = numberInput.value;
  const multiplicator = multiplicatorInput.value;

  if (!number || !multiplicator) {
    Swal.fire({
      icon: "info",
      title: "Preenchimento Obrigatório",
      text: "É necessário preencher todos os campos antes de prosseguir!.",
    });
    return;
  }

  createTable(number, multiplicator);
});

cleanBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cleanAll();
});

multiplicationForm.addEventListener("keydown", (e) => {
  if (e.code === "Enter") createTable(number, multiplicator);
});
