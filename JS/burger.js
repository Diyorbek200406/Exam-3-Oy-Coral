const cheese = document.getElementById("cheese");
const meat = document.getElementById("meat");
const opinion = document.getElementById("opinion");
const salad = document.getElementById("salad");
const tomato = document.getElementById("tomato");
const pickle = document.getElementById("pickle");
const bread = document.getElementById("bread");

//  total

const hisob = document.getElementById("hisob");

// clicks

cheese.addEventListener("click", (e) => {
  e.preventDefault();
  hisob.textContent = +hisob.textContent + 2;

  // alohida

  let cheese = document.querySelector("#cheese");
  let ul = document.querySelector("ul");
  let img = document.createElement("img");
  let li = document.createElement("li");

  img.setAttribute("src", "../burger-layers/cheese.png");

  let nima = document.querySelector("#bread-bottom");
  ul.insertBefore(li, nima);
  li.prepend(img);

  li.addEventListener("click", () => {
    li.remove();
    hisob.textContent = +hisob.textContent - 2;
  });
  reset.addEventListener("click", (e) => {
    e.preventDefault();
    li.remove();
  });
});
// cheese

// cheese
// cheese
// cheese
// cheese
// cheese
// cheese
// cheese
meat.addEventListener("click", (e) => {
  e.preventDefault();
  hisob.textContent = +hisob.textContent + 5;

  let meat = document.querySelector("#meat");
  let ul = document.querySelector("ul");
  let img = document.createElement("img");
  let li = document.createElement("li");

  img.setAttribute("src", "../burger-layers/meat.png");

  let nima = document.querySelector("#bread-bottom");
  ul.insertBefore(li, nima);
  li.prepend(img);

  li.addEventListener("click", () => {
    li.remove();
    hisob.textContent = +hisob.textContent - 5;
  });
  reset.addEventListener("click", (e) => {
    e.preventDefault();
    li.remove();
  });
});

opinion.addEventListener("click", (e) => {
  e.preventDefault();
  hisob.textContent = +hisob.textContent + 1;

  let opinion = document.querySelector("#opinion");
  let ul = document.querySelector("ul");
  let img = document.createElement("img");
  let li = document.createElement("li");

  img.setAttribute("src", "../burger-layers/onion.png");
  let nima = document.querySelector("#bread-bottom");
  ul.insertBefore(li, nima);
  li.prepend(img);

  li.addEventListener("click", () => {
    li.remove();
    hisob.textContent = +hisob.textContent - 1;
  });
  reset.addEventListener("click", (e) => {
    e.preventDefault();
    li.remove();
  });
});

salad.addEventListener("click", (e) => {
  e.preventDefault();
  hisob.textContent = +hisob.textContent + 1;

  let salad = document.querySelector("#salad");
  let ul = document.querySelector("ul");
  let img = document.createElement("img");
  let li = document.createElement("li");

  img.setAttribute("src", "../burger-layers/salad.png");
  let nima = document.querySelector("#bread-bottom");
  ul.insertBefore(li, nima);
  li.prepend(img);

  li.addEventListener("click", () => {
    li.remove();
    hisob.textContent = +hisob.textContent - 1;
  });
  reset.addEventListener("click", (e) => {
    e.preventDefault();
    li.remove();
  });
});

tomato.addEventListener("click", (e) => {
  e.preventDefault();
  hisob.textContent = +hisob.textContent + 2;

  let tomato = document.querySelector("#tomato");
  let ul = document.querySelector("ul");
  let img = document.createElement("img");
  let li = document.createElement("li");

  img.setAttribute("src", "../burger-layers/tomato.png");
  let nima = document.querySelector("#bread-bottom");
  ul.insertBefore(li, nima);
  li.prepend(img);

  li.addEventListener("click", () => {
    li.remove();
    hisob.textContent = +hisob.textContent - 2;
  });
  reset.addEventListener("click", (e) => {
    e.preventDefault();
    li.remove();
  });
});

pickle.addEventListener("click", (e) => {
  e.preventDefault();
  hisob.textContent = +hisob.textContent + 3;

  let pickle = document.querySelector("#pickle");
  let ul = document.querySelector("ul");
  let img = document.createElement("img");
  let li = document.createElement("li");

  img.setAttribute("src", "../burger-layers/pickle.png");
  let nima = document.querySelector("#bread-bottom");
  ul.insertBefore(li, nima);
  li.prepend(img);
  li.addEventListener("click", () => {
    li.remove();
    hisob.textContent = +hisob.textContent - 3;
  });
  reset.addEventListener("click", (e) => {
    e.preventDefault();
    li.remove();
  });
});

bread.addEventListener("click", (e) => {
  e.preventDefault();
  hisob.textContent = +hisob.textContent + 0;
});

//  buy and reset
//  buy and reset
//  buy and reset
//  buy and reset
//  buy and reset
//  buy and reset

const reset = document.getElementById("reset");
const buy = document.getElementById("buy");

reset.addEventListener("click", (e) => {
  e.preventDefault();
  hisob.textContent = 2;
  let no = document.querySelectorAll("li");
  no.remove();
});
//  buy and reset
//  buy and reset
//  buy and reset
//  buy and reset
//  buy and reset

// to'lov
// to'lov
// to'lov
// to'lov
// to'lov
// to'lov
buy.addEventListener("click", (e) => {
  e.preventDefault();

  let a = Math.round(Math.random() * (35 - 10) + 10);

  alert(`To'lov amalga oshdi va sizning navbatingiz ${a}`);
});
// to'lov
// to'lov
// to'lov
// to'lov
// to'lov
// to'lov
// to'lov
