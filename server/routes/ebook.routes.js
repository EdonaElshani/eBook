const ebookController = require('../controllers/ebook.controller');

module.exports = (app) =>{
    app.post("/api/book", ebookController.createBook);
    app.get("/api/book", ebookController.getAllBooks);
    app.get("/api/book/:id", ebookController.getOneBook);
    app.put("/api/book/:id", ebookController.updateBook);
    app.delete("/api/book/:id", ebookController.deleteBook);
}