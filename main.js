const addBtn = document.getElementById('add-btn');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const listSection = document.getElementById('books');
localStorage.removeItem('randid');
const header = document.querySelector('header');
const addBooksSection = document.querySelector('#add-books');
const contactSection = document.querySelector('footer');

const storage = JSON.parse(localStorage.getItem('BOOkS'));
// MY OBJECTS //
let books = [];

function checkStorage() {
  if (storage !== null) {
    books = storage;
  }
}
checkStorage();
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  Add() {
    books.push({ id: this.id, title: this.title, author: this.author });
  }

  Delete() {
    //  eslint-disable-next-line
    books = books.filter((item) => {
      for (let i = 0; i < books.length; i += 1) {
        if (item.id === this.id) {
          return false;
        }
        return true;
      }
    });
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
     
    </div>
    `;
  }
  listSection.innerHTML = printed;
}

printBooks();

//  eslint-disable-next-line
function deleteBook(id) {
  // let newBooks = [];
  //  eslint-disable-next-line
  console.log("I will delete book with id " + id);
  const newBooks = new Book(id, null, null);
  newBooks.Delete();

  printBooks();

  storeData();
}
/*
1. add eventlistener to List, add new and contact
list call displayList()
add new calls displayAddBooks()
constact calls displayContact()
when clicking name displayAll()
*/

function displayList() {
  if (listSection.classList.contains('hidden')) {
    listSection.classList.remove('hidden');
  }
  if (!addBooksSection.classList.contains('hidden')) {
    addBooksSection.classList.add('hidden');
  }
  if (!contactSection.classList.contains('hidden')) {
    contactSection.classList.add('hidden');
  }
  
}

function displayAddBooks() {

}

function displayContact() {

}

function displayAll() {

}


addBtn.addEventListener('click', () => {
  n += 1;

  const newBook = new Book(n, inpTitle.value, inpAuthor.value);
  newBook.Add();

  printBooks();

  storeData();
});
document.getElementById('call-list').addEventListener('click', displayList);
document.getElementById('call-add-new').addEventListener('click', displayAddBooks);
document.getElementById('call-contact').addEventListener('click', displayContact);
document.querySelector('.header-title').addEventListener('click', displayAll);

console.log(listSection.classList.contains('hidden'))