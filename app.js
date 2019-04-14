// constructor cho book
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// constructor cho UI
function UI() {}

//viet func cho addBookToList
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    // tao tr element
    const row = document.createElement('tr');

    // them book
    row.innerHTML = `<tr>
      <th>${book.title}</th>
      <th>${book.author}</th>
      <th>${book.isbn}</th>
      <th><a href="#" class="delete">X</a></th></tr>
    `;

    list.appendChild(row);
}


// tao event listener
document.getElementById('book-form').addEventListener('submit',function(e){
    // lấy value của form
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // tao obj book      
    const book = new Book(title,author,isbn);
    

    //tao obj UI
    const ui = new UI();

    // Tao book vao list
    ui.addBookToList(book);
      
    e.preventDefault();
});