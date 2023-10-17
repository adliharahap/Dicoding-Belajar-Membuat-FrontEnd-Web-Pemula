
const BukuBlmDibaca = document.getElementById("booknotread");
const BukuSlsDibaca = document.getElementById("bookdoneread");
const bookForm = document.getElementById("bookform");

// ketika navbar buku sls dibaca di klik
BukuSlsDibaca.addEventListener("click", (e) => {
    BukuSlsDibaca.classList.add("nav-active");
    BukuBlmDibaca.classList.remove("nav-active");
});

// ketika navbar buku blm sls dibaca di klik
BukuBlmDibaca.addEventListener("click", (e) => {
    BukuBlmDibaca.classList.add("nav-active");
    BukuSlsDibaca.classList.remove("nav-active");
});


//function menampilkan formaddbuku
const ShowFormBook = document.getElementById("addBookBtn");
ShowFormBook.addEventListener("click", (e) => {
    formBook.style.display = "block";
    ShowFormBook.style.display = "none";
});


// function tutup form buku
const formBook = document.getElementById("formAddBook");
const closeFormBook = document.getElementById('closeFormBook');
closeFormBook.addEventListener("click", (e) => {
    formBook.style.display = "none";
    ShowFormBook.style.display = "block";
});


// event listener menambahkan data buku di form
import formAddBook from "./bookForm.js";
bookForm.addEventListener("submit", formAddBook);



