const bookGrid = document.querySelector("#book-grid");
const bookLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.imgUrl = "https://demofree.sirv.com/nope-not-here.jpg"
    this.read = false;
}

Book.prototype.ReadBook = function(){
    this.read = true;
}

Book.prototype.AddImgUrl = function(newUrl){
    this.imgUrl = newUrl
}

Book.prototype.ShowInfoInConsole = function(){
    for (let key in this){
        if (this.hasOwnProperty(key)){
            console.log(`${key}: ${this[key]}`)
        }
    }
}

function addNewBook(newTitle, newAuthor, newPages){
    let newBook = new Book(newTitle, newAuthor, newPages);
    bookLibrary.push(newBook);
}

function createBookCard(bookToDisplay){
    const newBookCard = document.createElement("div");
    newBookCard.classList.add("book-card");
    bookGrid.appendChild(newBookCard);

    const bookCardImg = document.createElement("img");
    const bookCardTitle = document.createElement("h3");
    const bookCardAuthor = document.createElement("h3");
    const bookCardPages = document.createElement("h3");
    const bookCardReadButton = document.createElement("button");

    bookCardImg.src = bookToDisplay.imgUrl;
    bookCardTitle.textContent = bookToDisplay.title;
    bookCardAuthor.textContent = bookToDisplay.author;
    bookCardPages.textContent = bookToDisplay.pages;

    bookCardImg.classList.add("card-image")
    if(bookToDisplay.read){
        bookCardReadButton.classList.add("book-read");
        bookCardReadButton.textContent = "Read"
    }
    else{
        bookCardReadButton.classList.add("book-not-read");
        bookCardReadButton.textContent = "Not Read"

    }

    newBookCard.appendChild(bookCardImg);
    newBookCard.appendChild(bookCardTitle);
    newBookCard.appendChild(bookCardAuthor);
    newBookCard.appendChild(bookCardPages);
    newBookCard.appendChild(bookCardReadButton);

}








addNewBook("Wheel of Time", "Robert Jordan", 800);
addNewBook("Bible", "God", 7777);
createBookCard(bookLibrary[0]);
