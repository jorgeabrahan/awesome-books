import Book from './Book.js';

const booksCnt = document.getElementById('booksCnt');
const frmAddBook = document.getElementById('frmAddBook');
let books = JSON.parse(localStorage.getItem('books')) || [];

const saveBooksOnLocalStorage = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (button) => {
  // code to remove the book
  let indexTodelete = 0;
  
  books.forEach((e, index) => {
    if (e.id === button.id) {
      indexTodelete = index;
    }    
  });

  books.splice(indexTodelete, 1);
  saveBooksOnLocalStorage();
  button.parentElement.remove();
};

const loadBooksFromLocalStorage = () => {
  const booksAsInstances = [];
  books.forEach(({ title, author, id }) => {
    const book = new Book(title, author, id);
    book.insertBookHtml(booksCnt, removeBook);
    booksAsInstances.push(book);
  });
  books = booksAsInstances;
};

const addBook = (title, author) => {
  const book = new Book(title, author);
  books.push(book);
  book.insertBookHtml(booksCnt, removeBook);
  saveBooksOnLocalStorage();
};

frmAddBook.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = frmAddBook.title.value.trim();
  const author = frmAddBook.author.value.trim();
  addBook(title, author);
  frmAddBook.reset();
  frmAddBook.title.focus();
});

window.onload = () => {
  if (books.length > 0) {
    loadBooksFromLocalStorage();
  }
};
