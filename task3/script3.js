class Book {
    constructor(title, authors, numberOfPages, isRead, isFavorite) {
        this.title = title;
        this.authors = authors;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
        this.isFavorite = isFavorite;
    }

    markAsRead() {
        this.isRead = true;
    }

    toggleFavorite() {
        this.isFavorite = !this.isFavorite;
    }
}

class Bookshelf {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    getUnreadBooks() {
        return this.books.filter(book => !book.isRead);
    }

    getFavBooks() {
        return this.books.filter(book => book.isFavorite);
    }
}

const shelf = new Bookshelf();
const bookshelfDiv = document.getElementById("bookshelf");
const bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const authors = document.getElementById("authors").value;
    const numberOfPages = parseInt(document.getElementById("pages").value);
    const isRead = document.getElementById("isRead").checked;
    const isFavorite = document.getElementById("isFavorite").checked;

    const newBook = new Book(title, authors, numberOfPages, isRead, isFavorite);
    shelf.addBook(newBook);
    displayBooks();
    bookForm.reset();
});

function displayBooks() {
    bookshelfDiv.innerHTML = "";
    shelf.books.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Authors: ${book.authors}</p>
            <p>Pages: ${book.numberOfPages}</p>
            <p>Read: ${book.isRead ? "Yes" : "No"}</p>
            <p>Favorite: ${book.isFavorite ? "Yes" : "No"}</p>
            <button class="button" onclick="toggleRead(${index})">Toggle Read</button>
            <button class="button" onclick="toggleFavorite(${index})">Toggle Favorite</button>
            <button class="button" onclick="removeBook(${index})">Remove</button>
        `;
        bookshelfDiv.appendChild(bookCard);
    });
}

function toggleRead(index) {
    shelf.books[index].markAsRead();
    displayBooks();
}

function toggleFavorite(index) {
    shelf.books[index].toggleFavorite();
    displayBooks();
}

function removeBook(index) {
    shelf.removeBook(shelf.books[index]);
    displayBooks();
}

displayBooks();
