const STORAGE_KEY = "MY_BOOKSHELF";
let currentBooks = [];
let readBooks = [];
let editingBookId = null;

document.addEventListener("DOMContentLoaded", () => {
    loadBooksFromStorage();
    document.getElementById("bookForm").addEventListener("submit", handleFormSubmit);
    document.getElementById("searchButton").addEventListener("click", searchBooks);
    renderBooks();
});

function handleFormSubmit(event) {
    event.preventDefault();
    editingBookId ? updateBook() : addBook();
}

function addBook() {
    const book = getBookDetails();
    (book.isComplete ? readBooks : currentBooks).push(book);
    saveBooksToStorage();
    renderBooks();
    clearForm();
    showToast("Book added successfully!");
}

function updateBook() {
    const book = getBookDetails();
    const bookIndex = findBookIndex(editingBookId, currentBooks);
    if (bookIndex === -1) {
        const completedIndex = findBookIndex(editingBookId, readBooks);
        if (completedIndex !== -1) {
            readBooks[completedIndex] = book;
        }
    } else {
        currentBooks[bookIndex] = book;
    }
    saveBooksToStorage();
    renderBooks();
    clearForm();
    editingBookId = null;
    showToast("Book updated successfully!");
}

function getBookDetails() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const year = parseInt(document.getElementById("year").value);
    const isComplete = document.getElementById("completed").checked;

    return { id: Date.now(), title, author, year, isComplete };
}

function renderBooks() {
    renderBookList(currentBooks, "currentBooks");
    renderBookList(readBooks, "readBooks");
}

function renderBookList(books, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = books.map(book => createBookElement(book)).join('');
}

function createBookElement(book) {
    return `
        <div data-testid="bookItem">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>
            <button onclick="toggleBookStatus(${book.id})">${book.isComplete ? "Mark as Unread" : "Mark as Read"}</button>
            <button onclick="editBook(${book.id})">Edit</button>
            <button onclick="deleteBook(${book.id})">Delete</button>
        </div>
    `;
}

function toggleBookStatus(bookId) {
    const bookIndex = findBookIndex(bookId, currentBooks);
    if (bookIndex !== -1) {
        const book = currentBooks.splice(bookIndex, 1)[0];
        book.isComplete = true;
        readBooks.push(book);
    } else {
        const readIndex = findBookIndex(bookId, readBooks);
        if (readIndex !== -1) {
            const book = readBooks.splice(readIndex, 1)[0];
            book.isComplete = false;
            currentBooks.push(book);
        }
    }
    saveBooksToStorage();
    renderBooks();
}

function editBook(bookId) {
    editingBookId = bookId;
    const book = currentBooks.find(b => b.id === bookId) || readBooks.find(b => b.id === bookId);
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("year").value = book.year;
    document.getElementById("completed").checked = book.isComplete;
}

function deleteBook(bookId) {
    currentBooks = currentBooks.filter(book => book.id !== bookId);
    readBooks = readBooks.filter(book => book.id !== bookId);
    saveBooksToStorage();
    renderBooks();
}

function findBookIndex(bookId, books) {
    return books.findIndex(book => book.id === bookId);
}

function clearForm() {
    document.getElementById("bookForm").reset();
    editingBookId = null;
}

function saveBooksToStorage() {
    const data = { currentBooks, readBooks };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadBooksFromStorage() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data) {
        currentBooks = data.currentBooks || [];
        readBooks = data.readBooks || [];
    }
}

function searchBooks() {
    const query = document.getElementById("searchTitle").value.toLowerCase();
    const filteredCurrentBooks = currentBooks.filter(book => book.title.toLowerCase().includes(query) || book.author.to)
}
