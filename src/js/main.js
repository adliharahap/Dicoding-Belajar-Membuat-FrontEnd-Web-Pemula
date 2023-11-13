const NavbarContainer = document.getElementById("navcontainer");
const bookNavbar = document.getElementById("navbarbook");
const ContainerBody = document.getElementById("containerbody");
const BukuBlmDibaca = document.getElementById("booknotread");
const BukuSlsDibaca = document.getElementById("bookdoneread");
const bookForm = document.getElementById("bookform");
const containerBookCard = document.getElementById("containerbookcard");
const formBook = document.getElementById("formAddBook");
const closeFormBook = document.getElementById('closeFormBook');
const ShowFormBook = document.getElementById("addBookBtn");
const isDoneRead = document.getElementById("isbookread");
const DeleteCardBtn = document.getElementById("deletecardbtn");
const DeleteCardChecked = document.getElementById("deletecardchecked");
const SearchInput = document.getElementById("search-book");
const clearSearchInput =  document.getElementById("deleteinput");
const overlay = document.getElementById("overlay");
const bookNotFound = document.getElementById("booknotfound");
const BookValue = document.getElementById("bookresult");
const emptyBook = document.getElementById("emptybook");

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

// function menampilkan pesan kalau buku kosong
function BookEmpty() {
    emptyBook.classList.remove("hidden");
    const bookmessage = emptyBook.outerHTML;
    containerBookCard.innerHTML = bookmessage;
}

// fungsi untuk membuat buku selesai dibaca
function bookDoneReadBtn() {
    const cardbookbtn = document.querySelectorAll(".cardbook");

    cardbookbtn.forEach(button => {
        button.addEventListener("click",function(event) {
            const getData = localStorage.getItem("databuku");
            const databuku = JSON.parse(getData);

            const findBookId = button.id;
            const foundBook = databuku.find(book => String(book.id) === findBookId);
            if (foundBook) {
                foundBook.isComplete = true;
                containerBookCard.innerHTML = '';
                // console.log("Buku ditemukan dan isComplete diubah menjadi true:", foundBook);
                localStorage.setItem("databuku", JSON.stringify(databuku));
                formSubmited();

                // menampilkan pesan pemberitahuan bahwa buku berhasil selesai di baca
                messageDescription.textContent = "Buku telah dipindahkan ke Selesai Dibaca";
                messageimg.src = "icon/congrats.gif";
                messageimg.classList.add("h-48", "w-48");
                messageNotification.classList.remove("hidden");
                overlay.classList.remove("hidden");

                setTimeout(() => {
                    messageNotification.classList.add("hidden");
                    messageimg.src = "icon/centang.gif";
                    messageimg.classList = [];
                    messageimg.classList.add("h-24", "w-24");
                    overlay.classList.add("hidden");
                }, 5000);
            } else {
                console.log("Buku tidak ditemukan");
            }
        });
    });
}

// fungsi untuk mengembalikan buku ke belum dibaca
function BooknotReadBtn() {
    const cardbookbtn = document.querySelectorAll(".cardbook");

    cardbookbtn.forEach(button => {
        button.addEventListener("click",function(e) {
            const getData = localStorage.getItem("databuku");
            const databuku = JSON.parse(getData);

            const findBookId = button.id;
            const foundBook = databuku.find(book => String(book.id) === findBookId);
            if (foundBook) {
                foundBook.isComplete = false;
                containerBookCard.innerHTML = '';
                // console.log("Buku ditemukan dan isComplete diubah menjadi false:", foundBook);
                localStorage.setItem("databuku", JSON.stringify(databuku));
                formSubmited();

                // menampilkan pesan pemberitahuan bahwa buku berhasil dipindahkan ke belum di baca
                messageDescription.textContent = "Buku telah dipindahkan ke Belum Dibaca";
                messageimg.src = "icon/repeat.gif";
                messageimg.classList.add("h-48", "w-48");
                messageNotification.classList.remove("hidden");
                overlay.classList.remove("hidden");

                setTimeout(() => {
                    messageNotification.classList.add("hidden");
                    messageimg.src = "icon/centang.gif";
                    messageimg.classList = [];
                    messageimg.classList.add("h-24", "w-24");
                    overlay.classList.add("hidden");
                }, 2000);
            } else {
                console.log("Buku tidak ditemukan");
            }
        });
    });
}

// function menghapus bookcard
function DeleteCardBook() {
    const delButton = document.querySelectorAll(".delbtn");
    DeleteCardChecked.checked = 'true';
    DeleteCardBtn.classList.toggle('activebtn');

    if(DeleteCardBtn.classList.contains("activebtn")) {
        delButton.forEach((button) => {
            button.classList.toggle("hidden");
        });
    }else {
        delButton.forEach((button) => {
            button.classList.toggle("hidden");
        });
    }
    
}

function deletefunct() {
    const delButton = document.querySelectorAll(".delbtn");

    delButton.forEach(button => {
        button.addEventListener("click",function(e) {
            const getData = localStorage.getItem("databuku");
            let databuku = [];

            if (getData) {
                databuku = JSON.parse(getData);
            }

            const findBookId = button.id;
            const foundIndex = databuku.findIndex(book => String(book.id) === findBookId);

            if (foundIndex !== -1) {
                // Menghapus buku dari array databuku
                databuku.splice(foundIndex, 1);

                // Menyimpan array databuku yang diperbarui ke local storage
                localStorage.setItem("databuku", JSON.stringify(databuku));

                // Memanggil fungsi untuk mengupdate tampilan atau operasi lain
                formSubmited();

                // menampilkan pesan pemberitahuan bahwa buku berhasil di hapus
                messageDescription.textContent = "Buku Berhasil Di Hapus";
                messageimg.src = "icon/delete2.gif";
                messageimg.classList.add("h-40", "w-40");
                messageNotification.classList.remove("hidden");
                overlay.classList.remove("hidden");

                setTimeout(() => {
                    messageNotification.classList.add("hidden");
                    messageimg.src = "icon/centang.gif";
                    messageimg.classList = [];
                    messageimg.classList.add("h-24", "w-24");
                    overlay.classList.add("hidden");
                }, 3000);
            } else {
                console.log("Buku tidak ditemukan");
            }
        });
    });
}

DeleteCardBtn.addEventListener("click",DeleteCardBook);

import createBookCard from "./BookCardComponent.js";

// pemanggilan komponent notification message
import MessageNotif from "./MessageNotification.js";
MessageNotif();
const messageNotification = document.getElementById("notifmsg");
const messageDescription = document.getElementById("descriptionmsg");
const messageimg = document.getElementById("messageimg");

document.addEventListener("DOMContentLoaded", function(event) {

    const getBookData = localStorage.getItem("databuku");
    const BookData = JSON.parse(getBookData);

    if (BookData && BookData.length) {
        const mappingBook =  BookData.map(book => {

            if(!book.isComplete) {
                createBookCard(book.title, book.author, book.year, book.isComplete, book.id);
            }
        });
    } else {
        BookEmpty();
    }

    showBukuBlmDibaca();
    bookDoneReadBtn();
    deletefunct();
});

// membuat function ketika navbar buku sudah selesai dibaca menampilkan buku yang sudah di baca
let isComponentAdded = false;
function showBukuSlsDibaca() {
    isDoneRead.checked = true;

    if (BukuSlsDibaca.classList.contains("nav-active") && !isComponentAdded) {
        containerBookCard.innerHTML = '';

        const getBookData = localStorage.getItem("databuku");
        const BookData = JSON.parse(getBookData);

        if (BookData && BookData.length) {
            if (BookData.some(book => book.isComplete === true)) {
                const mappingBook = BookData.map((book) => {
                    if (book.isComplete) {
                    createBookCard(book.title, book.author, book.year, book.isComplete, book.id);
                    }
                });
            } else {
                BookEmpty();
            }
            // Setel flag menjadi true setelah komponen ditambahkan
            isComponentAdded = true;
            isComponentAdded2 = false;
        } else {
            BookEmpty();
        }

        // function mengupdate data buku menjadi dibaca ulang
        BooknotReadBtn();
        deletefunct();
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
            if (BookData.some(book => book.isComplete === false)) {
                const mappingBook = BookData.map((book) => {
                    if (!book.isComplete) {
                    createBookCard(book.title, book.author, book.year, book.isComplete, book.id);
                    }
                });
            } else {
                BookEmpty();
            }

            // Setel flag menjadi true setelah komponen ditambahkan
            isComponentAdded2 = true;
            isComponentAdded = false;
        } else {
            BookEmpty();
        }

        // function mengupdate data buku menjadi selesai dibaca
        bookDoneReadBtn();
        deletefunct();
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
    emptyBook.classList.add("hidden");

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
    messageDescription.textContent = "Buku Berhasil Di Simpan";
    messageNotification.classList.remove("hidden");
    overlay.classList.remove("hidden");

    setTimeout(() => {
        messageNotification.classList.add("hidden");
        overlay.classList.add("hidden");
    }, 2000);
});

import SearchBookComponent from "./SearchBookComponent.js";

// Function search book
function searchBook() {
    const inputValue = SearchInput.value;

    function BookNotFoundMessage(value) {
        bookNotFound.classList.remove("hidden");
        BookValue.textContent = value;
        const bookcomponent = bookNotFound.outerHTML;
        containerBookCard.innerHTML = bookcomponent;
    }

    if (inputValue.length >= 1) {
        // Mengatur style komponen
        bookNavbar.style.display = "none";
        containerBookCard.innerHTML = '';
        containerBookCard.classList.add("gap-3");
        clearSearchInput.style.display = "inline";
        NavbarContainer.classList.add("pb-5");
        DeleteCardBtn.classList.add("hidden");

        const GetBooks = JSON.parse(localStorage.getItem("databuku") || []);

        // Periksa apakah data buku tersedia
        if (GetBooks && GetBooks.length > 0) {
            const searchResults = SearchBooks(inputValue, GetBooks);

            // Memanggil komponen SearchBookComponent jika terdapat hasil pencarian
            if (searchResults.length > 0) {
                const bookComponents = searchResults.map(book => {
                    return SearchBookComponent(book.title, book.author, book.year, book.isComplete, book.id);
                });
                SearchBooksBtn();
            }else {
                BookNotFoundMessage(inputValue);
            }
        }else {
            BookNotFoundMessage(inputValue);
        }
    } else {
        formSubmited();
        containerBookCard.classList.remove("gap-3");
        bookNavbar.style.display = "block";
        ContainerBody.style.display = "block";
        clearSearchInput.style.display = "none";
        DeleteCardBtn.classList.remove("hidden");
        NavbarContainer.classList.remove("pb-5");
    }
}

// Fungsi pencarian buku
function SearchBooks(keyword, books) {
    const searchResults = [];

    for (const book of books) {
        if (
            book.title.toLowerCase().includes(keyword.toLowerCase()) ||
            book.author.toLowerCase().includes(keyword.toLowerCase()) ||
            book.year.toLowerCase().includes(keyword.toLowerCase())
        ) {
            searchResults.push(book);
        }
    }

    return searchResults;
}

SearchInput.addEventListener("input", searchBook);

clearSearchInput.addEventListener("click", function (event) {
SearchInput.value = "";
if (SearchInput.value === "") {
    searchBook();
}
});

// function memindahkan buku ke selesai dibaca / baca ulang di pencarian buku
function SearchBooksBtn() {
    const cardbookbtn = document.querySelectorAll(".cardbook");
    const delButton = document.querySelectorAll(".delbtn");

    cardbookbtn.forEach(button => {
        button.addEventListener("click",function(event) {
            if (button.textContent === "Selesai Dibaca") {
                const getData = localStorage.getItem("databuku");
                const databuku = JSON.parse(getData);

                const findBookId = button.id;
                const foundBook = databuku.find(book => String(book.id) === findBookId);

                if (foundBook) {
                    foundBook.isComplete = true;
                    localStorage.setItem("databuku", JSON.stringify(databuku));

                    messageDescription.textContent = "Buku telah dipindahkan ke Selesai Dibaca";
                    messageimg.src = "icon/congrats.gif";
                    messageimg.classList.add("h-48", "w-48");
                    messageNotification.classList.remove("hidden");
                    overlay.classList.remove("hidden");

                    function delay(ms) {
                        return new Promise(resolve => setTimeout(resolve, ms));
                    }
                    
                    async function DelayRefresh() {
                        // mereset kembali message notification
                        setTimeout(() => {
                            messageNotification.classList.add("hidden");
                            messageimg.src = "icon/centang.gif";
                            messageimg.classList = [];
                            messageimg.classList.add("h-24", "w-24");
                            overlay.classList.add("hidden");
                        }, 5000);
                    
                        // Menunggu 5 detik menggunakan async/await
                        await delay(5000);
                        
                        SearchInput.value = "";
                        if (SearchInput.value === "") {
                            searchBook();
                        }
                    }
                    
                    DelayRefresh();
                } else {
                    console.log("Buku tidak ditemukan");
                }
            } else {
                const getData = localStorage.getItem("databuku");
                const databuku = JSON.parse(getData);

                const findBookId = button.id;
                const foundBook = databuku.find(book => String(book.id) === findBookId);

                if (foundBook) {
                    foundBook.isComplete = false;
                    localStorage.setItem("databuku", JSON.stringify(databuku));

                    messageDescription.textContent = "Buku telah dipindahkan ke Belum Dibaca";
                    messageimg.src = "icon/repeat.gif";
                    messageimg.classList.add("h-48", "w-48");
                    messageNotification.classList.remove("hidden");
                    overlay.classList.remove("hidden");

                    function delay(ms) {
                        return new Promise(resolve => setTimeout(resolve, ms));
                    }
                    
                    async function DelayRefresh() {
                        // mereset kembali message notification
                        setTimeout(() => {
                            messageNotification.classList.add("hidden");
                            messageimg.src = "icon/centang.gif";
                            messageimg.classList = [];
                            messageimg.classList.add("h-24", "w-24");
                            overlay.classList.add("hidden");
                        }, 2000);
                    
                        // Menunggu 2 detik menggunakan async/await
                        await delay(2000);
                        
                        SearchInput.value = "";
                        if (SearchInput.value === "") {
                            searchBook();
                        }
                    }
                    
                    DelayRefresh();
                } else {
                    console.log("Buku tidak ditemukan");
                }
            }
        });
    });

    function SearchDeleteBtn() {
        delButton.forEach(button => {
            button.addEventListener("click",function(e) {
                const getData = localStorage.getItem("databuku");
                let databuku = [];
    
                if (getData) {
                    databuku = JSON.parse(getData);
                }
    
                const findBookId = button.id;
                const foundIndex = databuku.findIndex(book => String(book.id) === findBookId);
    
                if (foundIndex !== -1) {
                    // Menghapus buku dari array databuku
                    databuku.splice(foundIndex, 1);
    
                    // Menyimpan array databuku yang diperbarui ke local storage
                    localStorage.setItem("databuku", JSON.stringify(databuku));
    
                    // menampilkan pesan pemberitahuan bahwa buku berhasil di hapus
                    messageDescription.textContent = "Buku Berhasil Di Hapus";
                    messageimg.src = "icon/delete2.gif";
                    messageimg.classList.add("h-40", "w-40");
                    messageNotification.classList.remove("hidden");
                    overlay.classList.remove("hidden");

                    function delay(ms) {
                        return new Promise(resolve => setTimeout(resolve, ms));
                    }
                    
                    async function DelayRefresh() {
                        // mereset kembali message notification
                        setTimeout(() => {
                            messageNotification.classList.add("hidden");
                            messageimg.src = "icon/centang.gif";
                            messageimg.classList = [];
                            messageimg.classList.add("h-24", "w-24");
                            overlay.classList.add("hidden");
                        }, 3000);
                    
                        // Menunggu 3 detik menggunakan async/await
                        await delay(3000);
                        
                        SearchInput.value = "";
                        if (SearchInput.value === "") {
                            searchBook();
                        }
                    }
                    
                    DelayRefresh();
                } else {
                    console.log("Buku tidak ditemukan");
                }
            });
        });
    };

    SearchDeleteBtn();
}