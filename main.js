const addBtn = document.getElementById('add-btn');
const inpTitle = document.getElementById('title');
const inpAuthor = document.getElementById('author');
const bookContainer = document.getElementById('books');
const storage = JSON.parse(localStorage.getItem('BOOkS'));
// MY OBJECTS //
let Books = {};

const storeData = () => {
  localStorage.setItem('BOOkS', JSON.stringify(Books));
};

function lastId() {
  if (localStorage.length > 0) {
    Books = storage;
    const last = Object.keys(Books)[Object.keys(Books).length - 1];
    return Books[last].id;
    //  eslint-disable-next-line
  } else {
    return 0;
  }
}

let n = lastId();

function printBooks() {
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

printBooks();

//  eslint-disable-next-line
function deleteBook(id) {
  //  eslint-disable-next-line
  for (const book in Books) { 
    const bk = Books[book];
    if (bk.id === id) {
      delete Books[book];
    }
  }
  printBooks();
  storeData();
}

addBtn.addEventListener('click', () => {
  n += 1;
  //  eslint-disable-next-line
  const str = 'book' + n;
  Books[str] = {
    id: n,
    author: inpAuthor.value,
    title: inpTitle.value,
  };
  printBooks();
  storeData();
});