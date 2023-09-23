const express = require("express");
const app = express();
const PORT = 3000;

const bookRouter = require("./routes/book");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/", bookRouter);

app.listen(PORT, () => {
  console.log("server is running on port : " + PORT);
});
