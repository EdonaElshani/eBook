const express = require("express");
const cors = require("cors");
const app = express();
const Book = require("./models/ebook.model");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/ebook.routes")(app);

const server = app.listen(8000, () => {
  console.log("Listening on port 8000");
});

