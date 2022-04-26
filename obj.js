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

Book.prototype.ShowInfoInConsole = function(){
    for (let key in this){
        if (this.hasOwnProperty(key)){
            console.log(`${key}: ${this[key]}`)
        }
    }
}

const demoBook = new Book("The Eye Of The World", "Robert Jordan", 800);
demoBook.ReadBook();
demoBook.AddImgUrl("https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337818095l/228665.jpg");
demoBook.ShowInfoInConsole();