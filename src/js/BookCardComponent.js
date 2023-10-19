const containerBookCard = document.getElementById("containerbookcard");

function createBookCard(title, author, year, isComplete, id) {
    const div = document.createElement('div');
    div.className = 'h-max w-full bg-white rounded-md flex md:flex-col md:w-72 md:h-[490px] hover:cursor-pointer hover:scale-105 duration-200 mb-3';

    const aside = document.createElement('aside');
    aside.className = 'flex justify-center items-center p-3';

    const figure = document.createElement('figure');
    figure.className = 'rounded-sm overflow-hidden';

    const img = document.createElement('img');
    img.className = 'aspect-square h-32 md:h-full';
    img.src = 'img/book-default.jpeg';
    img.alt = 'book-cover';

    figure.appendChild(img);
    aside.appendChild(figure);
    div.appendChild(aside);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'h-full w-full py-5 pr-2 md:pl-4 md:flex md:flex-col md:justify-between';

    // Menambahkan section pertama
    const section1 = document.createElement('section');

    const h3 = document.createElement('h3');
    h3.className = 'text-[22px] font-medium line-clamp-2';
    h3.textContent = title;

    const p1 = document.createElement('p');
    p1.className = 'text-slate-600 font-medium line-clamp-1';

    // Tambahkan break line
    const br = document.createElement('br');

    const span = document.createElement('span');
    span.className = 'text-blue-500 font-semibold';
    span.textContent = year;

    // Tambahkan teks pada elemen paragraf
    p1.textContent = author;
    p1.appendChild(br); // Tambahkan break line

    section1.appendChild(h3);
    section1.appendChild(p1);
    section1.appendChild(span); // Tambahkan span

    // Menambahkan section kedua
    const section2 = document.createElement('section');
    section2.className = 'flex justify-end';
    const innerDiv = document.createElement('div');
    const button = document.createElement('button');
    button.id = id;
    button.className = 'text-white p-2 rounded-md bg-gradient-to-br from-blue-600 to-sky-400 mr-3 cardbook';
    if(!isComplete) {
        button.textContent = 'Selesai Dibaca';
    }else {
        button.textContent = 'Baca Ulang';
    }
    innerDiv.appendChild(button);
    section2.appendChild(innerDiv);

    contentDiv.appendChild(section1);
    contentDiv.appendChild(section2);
    div.appendChild(contentDiv);

    // Menggabungkan elemen ke dalam body
    containerBookCard.appendChild(div);
}

export default createBookCard;