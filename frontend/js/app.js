document.addEventListener('DOMContentLoaded', () => {
    const booksTableBody = document.getElementById('booksTableBody');
    const addBookForm = document.getElementById('addBookForm');

    const API_URL = 'http://localhost:3000/api/books';

    const fetchBooks = async () => {
        const response = await fetch(API_URL);
        const books = await response.json();
        booksTableBody.innerHTML = '';
        books.forEach(book => {
            const row = `
                <tr>
                    <td>${book.isbn}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.publication_year}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteBook(${book.id})">Delete</button>
                    </td>
                </tr>
            `;
            booksTableBody.innerHTML += row;
        });
    };

    addBookForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const book = {
            isbn: document.getElementById('isbn').value,
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            publication_year: document.getElementById('publication_year').value,
        };
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
        addBookForm.reset();
        fetchBooks();
    });

    window.deleteBook = async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        fetchBooks();
    };

    fetchBooks();
});