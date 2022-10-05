const addBtn = document.getElementById('add-btn');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const bookContainer = document.getElementById('books');
localStorage.removeItem('randid');
const storage = JSON.parse(localStorage.getItem('BOOkS'));
// MY OBJECTS //
let books = [];
console.log(storage);
function checkStorage() {
  if (storage !== null) {
    books = storage;
  }
  console.log(books);
}
checkStorage();
class Book {
  constructor (id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  Add(){
    books.push({id: this.id, title: this.title, author: this.author});
  }
  Delete(){

  }
}

const storeData = () => {
  localStorage.setItem('BOOkS', JSON.stringify(books));
};

function lastId() {
  let lastId = 0;
  if (books.length > 0) {
    lastId = books[books.length - 1].id;
  }
  return lastId;
}

let n = lastId();

function printBooks() {
  let printed = '';
  //  eslint-disable-next-line
  for (let i = 0; i < books.length; i += 1) {
    const bk = books[i];
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
  
  books = books.filter((item) => {
    for (let i = 0; i < books.length; i += 1) {
      if (item.id === id) {
        console.log('book found');
        return false;
      }
      return true;
    }
  });
  //books = newBooks;
  console.log('book deleted from books'); 
  printBooks();
  console.log('books printed');
  storeData();
  console.log('local storage updated');
  console.log(storage);
}

addBtn.addEventListener('click', () => {
  console.log(books);
  n += 1;
  console.log('I will add a new book with id ' + n)
  const newBook = new Book(n, inpTitle.value, inpAuthor.value);
  newBook.Add();
  console.log(books);
  console.log('book created');
  printBooks();
  console.log('books printed');
  storeData();
  console.log('books updated');
  console.log(storage);
});