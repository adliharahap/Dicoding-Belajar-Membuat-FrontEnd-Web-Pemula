const containerBookCard = document.getElementById("containerbookcard");

function SearchBookComponent(title, author, year, isComplete, id) {
    const div = document.createElement("div");
    div.className =
        "h-52 sm:h-40 w-full bg-white m-auto rounded-md shadow-sm overflow-hidden";

    const innerDiv = document.createElement("div");
    innerDiv.className = "flex items-center justify-start";

    const leftColumn = document.createElement("div");
    leftColumn.className = "h-40 px-2 flex justify-center items-center";

    const figure = document.createElement("figure");
    figure.className =
        "w-32 h-36 flex justify-center items-center rounded-sm overflow-hidden";

    const img = document.createElement("img");
    img.src = "./img/book-default.jpeg";
    img.className = "object-cover h-36";
    img.alt = "bookcover";

    figure.appendChild(img);
    leftColumn.appendChild(figure);

    const rightColumn = document.createElement("div");
    rightColumn.className = "flex flex-col sm:flex-row gap-5 sm:gap-0 sm:items-center sm:justify-center w-full h-full";

    const textInfo = document.createElement("div");
    textInfo.className = "ml-5 flex flex-col gap-3";

    const section1 = document.createElement("section");
    const h1Title = document.createElement("h1");
    h1Title.className = "text-[22px] font-medium line-clamp-2";
    h1Title.textContent = title;

    const h1Author = document.createElement("h1");
    h1Author.className = "text-slate-600 font-medium line-clamp-1";
    h1Author.textContent = author;

    const pYear = document.createElement("p");
    pYear.className = "text-lg font-semibold text-blue-500";
    pYear.textContent = year;

    section1.appendChild(h1Title);
    section1.appendChild(h1Author);
    section1.appendChild(pYear);

    const section2 = document.createElement("section");
    const pStatus = document.createElement("p");
    pStatus.textContent = "Status : ";
    const spanStatus = document.createElement("span");
    // spanStatus.className = "bg-green-500 p-1.5 shadow-sm rounded-sm text-white";
    // spanStatus.textContent = isComplete;
    if(!isComplete) {
        spanStatus.className = "bg-red-600 p-1.5 shadow-sm rounded-sm text-white";
        spanStatus.textContent = "Belum Dibaca";
    }else {
        spanStatus.className = "bg-green-500 p-1.5 shadow-sm rounded-sm text-white";
        spanStatus.textContent = "Selesai Dibaca";
    }

    pStatus.appendChild(spanStatus);
    section2.appendChild(pStatus);

    textInfo.appendChild(section1);
    textInfo.appendChild(section2);

    const buttonSection = document.createElement("div");
    buttonSection.className = "ml-auto mr-5";

    const buttonContainer = document.createElement("section");
    buttonContainer.className = "flex flex-row gap-5 justify-center items-center";

    const deleteButton = document.createElement("div");
    deleteButton.innerHTML = `
        <figure class="h-10 w-10 bg-red-200 flex justify-center items-center rounded-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="red">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </figure>
        `;

    const readAgainButton = document.createElement("div");
    if(!isComplete) {
        readAgainButton.innerHTML = `
        <button class="text-white p-2 rounded-md bg-gradient-to-br from-blue-600 to-sky-400 mr-3 cardbook">Selesai Dibaca</button>
        `;
    }else {
        readAgainButton.innerHTML = `
        <button class="text-white p-2 rounded-md bg-gradient-to-br from-blue-600 to-sky-400 mr-3 cardbook">Baca Ulang</button>
        `;
    }

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(readAgainButton);
    buttonSection.appendChild(buttonContainer);

    rightColumn.appendChild(textInfo);
    rightColumn.appendChild(buttonSection);

    innerDiv.appendChild(leftColumn);
    innerDiv.appendChild(rightColumn);

    div.appendChild(innerDiv);
    containerBookCard.appendChild(div);
    div.id = id;
    // return div;
}

// const bookComponent = SearchBookComponent();
// containerBookCard.appendChild(bookComponent);

export default SearchBookComponent;