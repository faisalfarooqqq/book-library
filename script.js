document.addEventListener("DOMContentLoaded", function() {
    const bookList = document.getElementById("list");


const bookLibrary = [];


function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    
    this.info = function(){
        const bookInfo = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.status;
     return bookInfo;
    }

}


const bookOne = new Book('misa', 'ali khan', 120, 'read');
bookLibrary.push(bookOne);
const bookTwo = new Book('harry potter', 'ali khan', 250, 'read');
bookLibrary.push(bookTwo);
const bookThree = new Book('Lord of the rings', 'ali khan', 360, 'read');
bookLibrary.push(bookThree);


for (let i = 0; i < bookLibrary.length; i++){
        console.log(bookLibrary[i].info());
        const bookInfodiv = document.createElement('div');
        bookInfodiv.classList.add('item-container');
        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookStatus = document.createElement('p');
        bookTitle.textContent = bookLibrary[i].title;
        bookAuthor.textContent = bookLibrary[i].author;
        bookPages.textContent = bookLibrary[i].pages;
        bookStatus.textContent = bookLibrary[i].status;

        bookInfodiv.appendChild(bookTitle);
        bookInfodiv.appendChild(bookAuthor);
        bookInfodiv.appendChild(bookPages);
        bookInfodiv.appendChild(bookStatus);
        
        bookList.appendChild(bookInfodiv);
        
}


// function addBook() {


// };

    
});






