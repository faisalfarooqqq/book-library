document.addEventListener("DOMContentLoaded", function() {
    const bookListContainer = document.querySelector(".book-container");
    const formContainer = document.querySelector('.form-container');


const bookLibrary = [];


function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status


}

function addBookForm() {
    const form = document.createElement('form');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = "Book Title";
    titleLabel.setAttribute("for", "title");
    const titleInput = document.createElement('input');
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Title");
    titleInput.setAttribute("id", "title" )


    const authorLabel = document.createElement('label');
    authorLabel.textContent = "Author Name";
    authorLabel.setAttribute("for", "author");
    const authorInput = document.createElement('input');
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("placeholder", "Author");
    authorInput.setAttribute("id", "author");
    
    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = "No of Pages";
    pagesLabel.setAttribute("for", "pages");
    const pagesInput = document.createElement('input');
    pagesInput.setAttribute("type", "number");
    pagesInput.setAttribute("placeholder", "Pages");
    pagesInput.setAttribute("id", "pages");

    
    const statusLabel = document.createElement('label');
    statusLabel.textContent = "Status:";
    
    const readRadio = document.createElement('input');
    readRadio.setAttribute("type", "radio");
    readRadio.setAttribute("name", "status");
    readRadio.setAttribute("value", "Read");
    const readLabel = document.createElement('label');
    readLabel.textContent = "Read";
    
    const notReadRadio = document.createElement('input');
    notReadRadio.setAttribute("type", "radio");
    notReadRadio.setAttribute("name", "status");
    notReadRadio.setAttribute("value", "Not Read");
    const notReadLabel = document.createElement('label');
    notReadLabel.textContent = "Not Read";

    
    const addButton = document.createElement('button');
    addButton.textContent = "Add";
    addButton.addEventListener("click", function(event) {

        event.preventDefault();
        const title = titleInput.value;
        const author = authorInput.value;
        const pages = pagesInput.value;
        const status = document.querySelector('input[name="status"]:checked').value;
        
        const newBook = new Book(title, author, pages, status);
        bookLibrary.push(newBook);

        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
        readRadio.checked = false;
        notReadRadio.checked = false;


    
        displayBookList();
    });
    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    form.appendChild(authorLabel);
    form.appendChild(authorInput);

    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);
    form.appendChild(statusLabel);
    form.appendChild(readRadio);
    form.appendChild(readLabel);
    form.appendChild(notReadRadio);
    form.appendChild(notReadLabel);
    form.appendChild(addButton);
    
    formContainer.appendChild(form);
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addBookForm);


function displayBookList() {
    bookListContainer.innerHTML = ""; 

    for (let i = 0; i < bookLibrary.length; i++) {
        const bookInfoDiv = document.createElement('div');
        bookInfoDiv.classList.add("item-container");
        bookInfoDiv.setAttribute("data-index", i);
        
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookStatus = document.createElement('p');

        const deleteEntry = document.createElement('button');
        const changeStatus = document.createElement('button');

        bookTitle.textContent = "Title: " + bookLibrary[i].title;
        bookAuthor.textContent = "Author: " + bookLibrary[i].author;
        bookPages.textContent = "Pages: " + bookLibrary[i].pages;
        bookStatus.textContent = "Status: " + bookLibrary[i].status;
        
        changeStatus.textContent = "Change Read Status";
        changeStatus.addEventListener('click', ()=> {
            const book = bookLibrary[i];
            book.status = book.status === "Read" ? "Not Read" : "Read";

            bookStatus.textContent = "Status: " + book.status;

        });

        deleteEntry.textContent = "Remove";
        deleteEntry.addEventListener('click', ()=>{
            const index = bookInfoDiv.getAttribute("data-index");

            bookLibrary.splice(index, 1);

            displayBookList();

        })

        bookInfoDiv.appendChild(bookTitle);
        bookInfoDiv.appendChild(bookAuthor);
        bookInfoDiv.appendChild(bookPages);
        bookInfoDiv.appendChild(bookStatus);
        bookInfoDiv.appendChild(changeStatus);
        bookInfoDiv.appendChild(deleteEntry);

        bookListContainer.appendChild(bookInfoDiv);
        
    }
}


const bookOne = new Book('misa', 'ali khan', 120, 'Read');
bookLibrary.push(bookOne);
const bookTwo = new Book('harry potter', 'ali khan', 250, 'Not Read');
bookLibrary.push(bookTwo);
const bookThree = new Book('Lord of the rings', 'ali khan', 360, 'Read');
bookLibrary.push(bookThree);

displayBookList();
console.log(bookLibrary);
    
});






