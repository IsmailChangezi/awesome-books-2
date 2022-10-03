const addBtn = document.getElementById("add-btn");
const inpTitle = document.getElementById("title");
const inpAuthor = document.getElementById("author");
const bookContainer = document.getElementById("books");

// MY OBJECTS //

let Books = new Object();
let n = 0;

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

function deleteBook(id) {
  for (const book in Books) {
    const bk = Books[book];
    if (bk.id === id) {
      delete Books[book];
      console.log(Books[book]);
    }
  }
  printBooks();
  storeData();
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
});

let storeData = () => {
  localStorage.setItem("BOOkS", JSON.stringify(Books));
};

// function storeData() {
//   let storeTitle = inpTitle.value;
//   let storeInput = inpAuthor.value;
//   localStorage.setItem("title", JSON.stringify(storeInput));
// }

// storeData();
