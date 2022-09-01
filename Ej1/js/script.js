// Array extraño
const strangeArray = [
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  undefined,
  "ola ke ase",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  ["Hola mundo!"],
  "b",
];

function addListItem(item) {
  const list = document.getElementById("list");
  list.innerHTML += `<li>${item}</li>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const filteredArray = strangeArray.filter(
    (element) => typeof element === "string"
  );
  for( let element of filteredArray){
  addListItem(element);
  }
});
