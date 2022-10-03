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

let myObjects = new CreateObjects([titleInput.value, authorInput.value]);

let generateBody = () => {
  return (bookSection.innerHTML = myObjects.map((x) => {
    `

    <p id="title-para">${myObjects.title}</p>
    <p>by</p>
    <p id="author-para">${myObjects.name}</p>
    <input type="button" value="Remove" id="remove-btn" />
    <hr />
    
    
    `;
  }));
};

// addBtn.addEventListener("click", () => {
//   console.log(generateBody());
// });
