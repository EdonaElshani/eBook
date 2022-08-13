const mongoose = require('mongoose');

const BookSchema = {
    title:{
        type: String,
        required: [true, 'Title is required'],
        minLength: [3, 'Title must be at least 3 characters']
    },
    category:{
        type: String,
        required: [true, 'Category is required'],
        enum: [
            "Adventure",
            "Romance",
            "Contemporary",
            "Horror",
            "Self-help",
            'Families & Relationships',
            "Motivational",
        ]
    },
    description:{
        type: String,
        required: [true, 'Description is required'],
        minLength: [3, 'Description must be at least 3 characters'],
    },
    author: {
        type: String,
        required: [true, 'Author is required'],    
    },
    noPage: {
        type: Number,
        required: [true, 'Number of pages is required'],  
        min: [1, 'Number of pages must be at least 1'],
    },
    imgPath: {
        type: String,
        default: 'https://silviabastos.com/app/themes/sage/dist/images/default-book.gif',
    } ,
    price: {
        type: Number,
        min: [0, 'Price cannot be negative']
    } 
}

module.exports = mongoose.model('Books', BookSchema)