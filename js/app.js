import Book from './Book.js';

const booksCnt = document.getElementById('booksCnt');
const frmAddBook = document.getElementById('frmAddBook');
const books = [];

const removeBook = (button) => {
  // code to remove the book
  console.log(button);
};

const addBook = (title, author) => {
  const book = new Book(title, author);
  books.push(book);
  book.insertBookHtml(booksCnt, removeBook);
};

frmAddBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = frmAddBook.title.value.trim();
  const author = frmAddBook.author.value.trim();
  addBook(title, author);
  frmAddBook.reset();
  frmAddBook.title.focus();
});
