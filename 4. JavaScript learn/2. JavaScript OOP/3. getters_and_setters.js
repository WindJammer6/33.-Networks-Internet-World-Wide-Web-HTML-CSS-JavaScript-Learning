// Getters and setters are special methods in JavaScript classes that let you control access to
// an Class Instance's properties.
// - A getter lets you read a property as if it were a regular variable, but it runs a method 
//   under the hood.
// - A setter lets you update a property while still running custom logic, like validation 
//   or logging.

// They are used for:
// - Encapsulation: You can hide the actual variable ('_author') and safely control how it's 
//   accessed or changed.
// - Future flexibility: You can add validation or transformation later without changing how 
//   your code is used.

class Book {
    constructor(author) {
        this._author = author;
    }

    // Getter
    get writer() {
        return this._author;
    }

    // Setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}


const book = new Book("Harry");

// Using the Getter
console.log(book.writer);

// Using the Setter
book.writer = "James";
console.log(book.writer);