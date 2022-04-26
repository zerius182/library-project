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
