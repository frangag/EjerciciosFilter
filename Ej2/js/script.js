const people = [
  { name: "Hernan", lastname: "Banco", age: 22 },
  { name: "Elvie", lastname: "Jo", age: 78 },
  { name: "Elizabeth", lastname: "Joven", age: 19 },
  { name: "Gumercinda", lastname: "Albahaca", age: 94 },
  { name: "Francisca", lastname: "Goodman", age: 36 },
  { name: "Leandro", lastname: "Pinkman", age: 22 },
  { name: "Beige", lastname: "Amarillo", age: 17 },
  { name: "Rose", lastname: "Albarado", age: 65 },
];

const showList = (arr) => {
  const container = document.getElementById("list");
  container.innerHTML = "";
  for (let item of arr) {
    container.innerHTML += `<li>${item.name} ${item.lastname}</li>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  showList(people);
  const button = document.getElementById("dontAccept");
  button.addEventListener("click", () => {
    const oldPeople = people.filter((item) => item.age >= 23);
    showList(oldPeople);
  });
});
