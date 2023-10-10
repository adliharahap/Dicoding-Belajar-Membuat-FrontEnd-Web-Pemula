
const BukuBlmDibaca = document.getElementById("booknotread");
const BukuSlsDibaca = document.getElementById("bookdoneread");

BukuSlsDibaca.addEventListener("click", (e) => {
    BukuSlsDibaca.classList.add("nav-active");
    BukuBlmDibaca.classList.remove("nav-active");
});

BukuBlmDibaca.addEventListener("click", (e) => {
    BukuBlmDibaca.classList.add("nav-active");
    BukuSlsDibaca.classList.remove("nav-active");
});

import createBookCard from "./BookCardComponent.js";

createBookCard();
