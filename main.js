const addBtn = document.getElementById('add-btn');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const bookContainer = document.getElementById('books');
localStorage.removeItem('randid');
const storage = JSON.parse(localStorage.getItem('BOOkS'));
// MY OBJECTS //
let Books = [];
console.log(storage);
function checkStorage() {
  if (storage !== null) {
    Books = storage;
  }
  console.log(Books);
}
checkStorage();
/*class Libros {
  constructor (id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}*/

const storeData = () => {
  localStorage.setItem('BOOkS', JSON.stringify(Books));
};

function lastId() {
  let lastId = 0;
  if (Books.length > 0) {
    lastId = Books[Books.length - 1].id;
  }
  return lastId;
}

let n = lastId();

function printBooks() {
  let printed = '';
  //  eslint-disable-next-line
  for (let i = 0; i < Books.length; i += 1) {
    const bk = Books[i];
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

//  eslint-disable-next-line
function deleteBook(id) {
  //let newBooks = [];
  //  eslint-disable-next-line
  console.log('I will delete book with id ' + id)
  
  Books = Books.filter((item) => {
    for (let i = 0; i < Books.length; i += 1) {
      if (item.id === id) {
        console.log('book found');
        return false;
      }
      return true;
    }
  });
  //Books = newBooks;
  console.log('book deleted from books'); 
  printBooks();
  console.log('books printed');
  storeData();
  console.log('local storage updated');
  console.log(storage);
}

addBtn.addEventListener('click', () => {
  console.log(Books);
  n += 1;
  console.log('I will add a new book with id ' + n)
  //  eslint-disable-next-line
  Books.push({
    id: n,
    author: inpAuthor.value,
    title: inpTitle.value,
  });
  console.log(Books);
  console.log('book created');
  printBooks();
  console.log('books printed');
  storeData();
  console.log('books updated');
  console.log(storage);
});