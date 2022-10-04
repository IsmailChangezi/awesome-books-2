const addBtn = document.getElementById('add-btn');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const bookContainer = document.getElementById('books');
const storage = JSON.parse(localStorage.getItem('BOOkS'));
// MY OBJECTS //
let Books = {};
let Biblios = class {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static storeData = () => {
    localStorage.setItem('BOOkS', JSON.stringify(Books));
  };
  
  static checkStorage(){
    if (localStorage.length > 0) {
      Books = storage;
    }
  }

  static lastId() {
    if (localStorage.length > 0) {
      Books = storage;
      const last = Object.keys(Books)[Object.keys(Books).length - 1];
      return Books[last].id;
      //  eslint-disable-next-line
    } else {
      return 0;
    }
  }
  
  static printBooks() {
    let printed = '';
    //  eslint-disable-next-line
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
  
  //  eslint-disable-next-line
  static deleteBook(id) {
    //  eslint-disable-next-line
    console.log('I will delete book with id '+id)
    for (const book in Books) { 
      const bk = Books[book];
      if (bk.id === id) {
        console.log('book found');
        delete Books[book];
        console.log('book deleted from books');
      }
    }
    this.printBooks();
    console.log('books printed');
    this.storeData();
    console.log('local storage updated');
    console.log(storage);
  }
  
  static addBook() {
    n = this.lastId() +1;
    console.log('I will add a new book with id '+n);
    //  eslint-disable-next-line
    const str = 'book' + n;
    Books[str] = {
      id: n,
      author: inpAuthor.value,
      title: inpTitle.value,
    };
    console.log('book created');
    this.printBooks();
    console.log('books printed');
    this.storeData();
    console.log('books updated');
    console.log(storage);
  }
}

addBtn.addEventListener('click', Biblios.addBook);
Biblios.checkStorage();
Biblios.printBooks();

