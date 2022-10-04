const addBtn = document.getElementById("add-btn");
const inpTitle = document.getElementById("title");
const inpAuthor = document.getElementById("author");
const bookContainer = document.getElementById("books");
const storage = JSON.parse(localStorage.getItem('BOOkS'));
// MY OBJECTS //
console.log(storage);
let Books = new Object();

let storeData = () => {
  localStorage.setItem("BOOkS", JSON.stringify(Books));
};

function lastId() {
  if(localStorage.length > 0){
    Books=storage;
    last = Object.keys(Books)[Object.keys(Books).length-1];
    return Books[last].id;
  }
  else {
    return 0;
  }
}

let n = lastId();

function printBooks() {
  let printed = "";
  for (const book in Books) {
    const bk = Books[book];
    printed += `
    <div class="book-section" id="book${bk.id}">
      <p>${bk.title} by ${bk.author}</p>
      <button onclick="deleteBook(${bk.id})">Erase</button>
      <hr/>
    </div>
    `;
  }
  bookContainer.innerHTML = printed;
}

printBooks();

function deleteBook(id) {
  for (const book in Books) {
    const bk = Books[book];
    if (bk.id === id) {
      delete Books[book];
    }
  }
  printBooks();
  storeData();
  console.log(storage);
}

addBtn.addEventListener("click", () => {
  n += 1;
  let str = "book" + n;
  Books[str] = {
    id: n,
    author: inpAuthor.value,
    title: inpTitle.value,
  };
  printBooks();
  storeData();
  console.log(storage);
});