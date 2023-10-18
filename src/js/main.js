
const BukuBlmDibaca = document.getElementById("booknotread");
const BukuSlsDibaca = document.getElementById("bookdoneread");
const bookForm = document.getElementById("bookform");
const containerBookCard = document.getElementById("containerbookcard");
const formBook = document.getElementById("formAddBook");
const closeFormBook = document.getElementById('closeFormBook');
const ShowFormBook = document.getElementById("addBookBtn");
const isDoneRead = document.getElementById("isbookread");

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
ShowFormBook.addEventListener("click", (e) => {
    formBook.style.display = "block";
    ShowFormBook.style.display = "none";
});


// function tutup form buku
closeFormBook.addEventListener("click", (e) => {
    formBook.style.display = "none";
    ShowFormBook.style.display = "block";
});


// function melakukan perulangan ke book card yang belum dibaca ketika halaman pertama kali dimuat
import createBookCard from "./BookCardComponent.js";

document.addEventListener("DOMContentLoaded", function(event) {

    const getBookData = localStorage.getItem("databuku");
    const BookData = JSON.parse(getBookData);

    if (BookData && BookData.length) {
        const mappingBook =  BookData.map(book => {

            if(!book.isComplete) {
                createBookCard(book.title, book.author, book.year)
            }
        });
    } else {
        console.log("data kosong");
    }
});

// membuat funnction ketika navbar buku sudah selesai dibaca menampilkan buku yang sudah di baca
let isComponentAdded = false;
function showBukuSlsDibaca() {
    isDoneRead.checked = true;

    if (BukuSlsDibaca.classList.contains("nav-active") && !isComponentAdded) {
        containerBookCard.innerHTML = '';

        const getBookData = localStorage.getItem("databuku");
        const BookData = JSON.parse(getBookData);

        if (BookData && BookData.length) {
            const mappingBook = BookData.map((book) => {
                if (book.isComplete) {
                createBookCard(book.title, book.author, book.year);
                }
            });

        // Setel flag menjadi true setelah komponen ditambahkan
        isComponentAdded = true;
        isComponentAdded2 = false;
        } else {
            console.log("data kosong");
        }
    }
}

let isComponentAdded2 = false;
function showBukuBlmDibaca() {
    isDoneRead.checked = false;

    if (BukuBlmDibaca.classList.contains("nav-active") && !isComponentAdded2) {
        containerBookCard.innerHTML = '';

        const getBookData = localStorage.getItem("databuku");
        const BookData = JSON.parse(getBookData);

        if (BookData && BookData.length) {
            const mappingBook = BookData.map((book) => {
                if (!book.isComplete) {
                createBookCard(book.title, book.author, book.year);
                }
            });

        // Setel flag menjadi true setelah komponen ditambahkan
        isComponentAdded2 = true;
        isComponentAdded = false;
        } else {
            console.log("data kosong");
        }
    }
}

BukuSlsDibaca.addEventListener("click",showBukuSlsDibaca);

// membuat function ketika navbar buku belum selesai dibaca menampilkan buku yang belum di baca
BukuBlmDibaca.addEventListener("click",showBukuBlmDibaca);


function formSubmited() {
    const JudulBuku = document.getElementById("judulbuku");
    const AuthorBuku = document.getElementById("author");
    const TahunBuku = document.getElementById("tahun");

    formBook.style.display = "none";
    ShowFormBook.style.display = "block";
    JudulBuku.value = "";
    AuthorBuku.value = "";
    TahunBuku.value = "";

    try {
        if(BukuSlsDibaca.classList.contains("nav-active")) {
            isComponentAdded = false;
            isDoneRead.checked = true;
            showBukuSlsDibaca();
        }else if (BukuBlmDibaca.classList.contains("nav-active")) {
            isComponentAdded2 = false;
            isDoneRead.checked = false;
            showBukuBlmDibaca();
        }
    }catch(error) {
        console.error(`System Error : ${error}`);
    }
}


// event listener menambahkan data buku di form
import formAddBook from "./bookForm.js";
bookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formAddBook();
    formSubmited();
});