export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    if (id === undefined) {
      this.createId();
      return;
    }
    this.id = id;
  }

  insertBookHtml(container, removeCallback) {
    const book = document.createElement('div');
    book.innerHTML = `
      <p>"<span>${this.title}</span>" by <span>${this.author}</span></p>
      <button id="${this.id}">Remove</button>
    `;
    const btnRemove = book.querySelector('button');
    btnRemove.addEventListener('click', ({ target }) => {
      removeCallback(target);
    });
    container.appendChild(book);
  }

  createId(tokenLen = 16) {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < tokenLen; i += 1) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.id = id;
  }
}
