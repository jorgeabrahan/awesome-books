import Books from './Books.js';

const booksCnt = document.getElementById('booksCnt');
const frmAddBook = document.getElementById('frmAddBook');

const books = new Books(booksCnt);

frmAddBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = frmAddBook.title.value.trim();
  const author = frmAddBook.author.value.trim();
  books.add(title, author);
  frmAddBook.reset();
  frmAddBook.title.focus();
});
