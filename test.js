/*This file will be deleted*/
let testBook = new Book("test-title", "test-author", 666);
testBook.ReadBook();
testBook.AddImgUrl("www.google.com");
bookLibrary.push(testBook);
let test2 = new Book("yo", "yo", 999);
bookLibrary.push(test2);

bookLibrary.forEach(book =>{
    for (let key in book){
        if(book.hasOwnProperty(key)){
            console.log(`${key}: ${book[key]}`);
        }
        else{
            continue;
        }
    }
})