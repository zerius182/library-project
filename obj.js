const bookLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.imgUrl = null;
    this.read = false;
}

Book.prototype.ReadBook = function(){
    this.read = true;
}

Book.prototype.AddImgUrl = function(newUrl){
    this.imgUrl = newUrl
}

let testBook = new Book("test-title", "test-author", 666);
testBook.ReadBook();
testBook.AddImgUrl("www.google.com");
bookLibrary.push(testBook);
let test2 = new Book("yo", "yo", 999);
bookLibrary.push(test2);

console.log(bookLibrary)