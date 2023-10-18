const express = require('express');
const port = 3000;

const books = [ 
            { id: 1, title: "The Great Gatsby" }, 
            { id: 2, title: "To Kill a Mockingbird" }, 
            { id: 3, title: "1984" }
        ];

const app = express();

app.get('/',(req,res) => {
    res.send("This is the main page")
})

app.get('/books', (req, res) =>{
    res.json(books)
})


app.get('/books/long', (req,res)=>{
    res.send("List of Long Books")
})
app.get('/books/:id', (req, res) => { 
    // Retrieve a book by its ID 
    const bookId = parseInt(req.params.id); 
    const book = books.find((b) => b.id === bookId); 
    
    if (!book) { 
        return res.status(404).send("Book not found"); 
    }
    res.send(`Book Title: ${book.title}`); });

// PART 2 //
app.get('/fixed-example/:id', (req, res) => { 
    const bookId = parseInt(req.params.id)
    if (bookId === 'error'){
        res.status(404).send('This is an error'); 
    }
    res.send(`Book ID is this: ${bookId}`); 
});

app.get('/greet/:firstname/:lastname', (req, res) => { 
    res.send(`Hello ${req.params.firstname} ${req.params.lastname}`); 
});

app.listen(port, ()=>{
    console.log(`server live on port ${port}`);
})