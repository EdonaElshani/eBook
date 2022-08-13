const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/eBook-MERN", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Couldn't connect to MongoDB" + err.message));