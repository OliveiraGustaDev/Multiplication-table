// Seleção de Elementos

const body = document.querySelector(".clear");
const darkBtn = document.querySelector("#dark");
const clearBtn = document.querySelector("#clear");

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");

const cleanBtn = document.querySelector("#clean");
const tableTitle = document.querySelector("#title");

const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);
const multiplicationTitle2 = document.querySelector(
  "#multiplication-title2 span"
);

const multiplicationTitleText = document.querySelector("#multiplication-title");
const multiplicationTitle2Text = document.querySelector(
  "#multiplication-title2"
);

const multiplicationTableText = document.querySelector(
  "#multiplication-operations p"
);

const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);
// Funções

const createTable = () => {
  const number = numberInput.value;
  const multiplicator = multiplicatorInput.value;

  if (!number || !multiplicator) {
    Swal.fire({
      icon: "info",
      title: "Preenchimento Obrigatório!",
      text: "É necessário preencher todos os campos antes de prosseguir!",
    });
    return;
  }

  for (i = 1; i <= multiplicator; i++) {
    const result = number * i;

    tableTitle.innerHTML = "Tabuada gerada com Sucesso!";
    tableTitle.style.color = "#7cff7c";
    multiplicationTitle.innerHTML = number;
    multiplicationTitle2.innerHTML = multiplicator;
    multiplicationTitle.style.color = "#7cff7c";
    multiplicationTitle2.style.color = "#7cff7c";
    multiplicationTitleText.style.color = "#7cff7c";
    multiplicationTitle2Text.style.color = "#7cff7c";

    multiplicationTableText.innerHTML = "";

    const template = `<div class="row">
    <div class="operations">${number} x ${i} = </div>
    <div class="result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }
};

const restartAll = () => {
  tableTitle.innerHTML = "Digite o número e confirme para gerar a tabuada";
  tableTitle.style.color = "";
  multiplicationTitle.innerHTML = "";
  multiplicationTitle2.innerHTML = "";
  multiplicationTitle.style.color = "";
  multiplicationTitle2.style.color = "#";
  multiplicationTitleText.style.color = "";
  multiplicationTitle2Text.style.color = "";
  multiplicationTable.innerHTML =
    "Informe um número para calcular uma Tabuada...";
  multiplicationTableText.innerHTML = "";
  numberInput.value = "";
  multiplicatorInput.value = "";
  numberInput.focus();
};

// Eventos

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  createTable();
  numberInput.focus();
});

cleanBtn.addEventListener("click", (e) => {
  e.preventDefault();

  restartAll();
});

clearBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.add("clear");
    body.classList.remove("dark");
  }
});

darkBtn.addEventListener("click", () => {
  if (body.classList.contains("clear")) {
    body.classList.add("dark");
    body.classList.remove("clear");
  }
});
