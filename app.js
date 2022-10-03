const bookContainer = document.getElementById("container");
const bookSection = document.getElementById("book-section");
const removeBtn = document.getElementById("remove-btn");
const form = document.getElementById("form");
const addBtn = document.getElementById("add-btn");
const titlePara = document.getElementById("title-para");
const authorPara = document.getElementById("author-para");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");

// MY OBJECTS //

function CreateObjects(title, name) {
  this.title = title;
  this.name = name;
}
addBtn.addEventListener("click", () => {
  let myObjects = new CreateObjects(titleInput.value, authorInput.value);

  function generateBody() {
    bookContainer.innerHTML = myObjects.map((x) => {
      return `
   <div class="book-section" id="book-section">
   <p id="title-para">Book Title</p>
   <p>by</p>
   <p id="author-para">Book Author</p>
   <input type="button" value="Remove" id="remove-btn" />
   <hr />
 </div>
   `;
    });
  }
  generateBody();
});
