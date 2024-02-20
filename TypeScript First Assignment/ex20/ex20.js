// Create an array of books using objects
var bookList = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960 },
    { title: "1984", author: "George Orwell", publicationYear: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", publicationYear: 1951 },
    { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813 }
];
// Print information about each book
console.log("List of Books:");
for (var i = 0; i < bookList.length; i++) {
    console.log("Title: ".concat(bookList[i].title));
    console.log("Author: ".concat(bookList[i].author));
    console.log("Publication Year: ".concat(bookList[i].publicationYear));
    console.log("---------------");
}
