const express = require("express");
const cors = require("cors");
const app = express();
const Book = require("./models/ebook.model");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/ebook.routes")(app);
require("./routes/user.routes")(app);
require('dotenv').config();

const server = app.listen(8000, () => {
  console.log("Listening on port " + process.env.PORT);
});

