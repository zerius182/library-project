const bookGrid = document.querySelector("#book-grid");
const bookLibrary = [];

function Book(title, author, pages, imgUrl){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.imgUrl = imgUrl;
    if(this.imgUrl === undefined){
        this.imgUrl = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
    }
}

Book.prototype.ReadBook = function(){
    this.read = true;
}

Book.prototype.AddImageUrl = function(imageUrl){
    this.imgUrl = imageUrl
}

Book.prototype.ShowInfoInConsole = function(){
    for (let key in this){
        if (this.hasOwnProperty(key)){
            console.log(`${key}: ${this[key]}`)
        }
    }
}

function addNewBook(newTitle, newAuthor, newPages, newImgUrl){
    let newBook = new Book(newTitle, newAuthor, newPages, newImgUrl);
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

function populateBookGrid(libraryArray){
    libraryArray.forEach(book =>{
        createBookCard(book)
    })
}








addNewBook("The Eye of the World", "Robert Jordan", 800, "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337818095l/228665.jpg");
addNewBook("Bible", "God", 7777);
addNewBook("Necronomicom", "Satan", 666, "https://www.sideshow.com/storage/product-images/905430/book-of-the-dead-necronomicon_evil-dead-ii_silo.png");


populateBookGrid(bookLibrary);