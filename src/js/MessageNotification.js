

function MessageNotif() {
    // Buat elemen div
    const messageNotification = document.createElement('div');
    messageNotification.id = 'notifmsg';
    messageNotification.className = 'h-72 w-72 rounded-md shadow-md hidden bg-white fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden mx-2 border-2 border-solid border-black';

    // Buat elemen section pertama
    const section1 = document.createElement('section');
    section1.className = 'h-44 flex justify-center items-center mb-6';

    // Buat elemen figure
    const figure = document.createElement('figure');

    // Buat elemen img
    const img = document.createElement('img');
    img.id = 'messageimg';
    img.alt = '';
    img.className = 'h-24 w-24';
    img.src = 'src/icon/centang.gif';

    // Gabungkan elemen-elemen
    figure.appendChild(img);
    section1.appendChild(figure);

    // Buat elemen section kedua
    const section2 = document.createElement('section');

    // Buat elemen h1
    const h1 = document.createElement('h1');
    h1.id = 'descriptionmsg';
    h1.className = 'text-center font-bold text-lg';
    h1.textContent = '';

    // Gabungkan elemen-elemen
    section2.appendChild(h1);

    // Gabungkan elemen section1 dan section2 ke dalam messageNotification
    messageNotification.appendChild(section1);
    messageNotification.appendChild(section2);

    // Sisipkan messageNotification ke dalam dokumen
    document.body.appendChild(messageNotification);
}

export default MessageNotif;