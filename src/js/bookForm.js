
const formAddBook = () => {
    const JudulBukuValue = document.getElementById("judulbuku").value;
    const AuthorBukuValue = document.getElementById("author").value;
    const TahunBukuValue = document.getElementById("tahun").value;
    const isDoneRead = document.getElementById("isbookread");

    const isComplete = () => {
        if(isDoneRead.checked) {
            return true;
        }else {
            return false;
        }
    }

    // mengkonversi tipe data year ke number
    let YearToNum = parseInt(TahunBukuValue);

    const getBookData = [
        {
            id: +new Date(),
            title: JudulBukuValue,
            author: AuthorBukuValue,
            year: YearToNum,
            isComplete: isComplete(),
        }
    ];

    const getDataStr = localStorage.getItem("databuku");
    const getData = getDataStr ? JSON.parse(getDataStr) : [];
    
    getData.push(...getBookData);

    const updatedDataStr = JSON.stringify(getData);
    localStorage.setItem("databuku", updatedDataStr);

    console.log("Data buku telah disimpan di localStorage:", updatedDataStr);
}

export default formAddBook;