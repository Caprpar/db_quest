const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

// const tempRoutes = require("./routes/tempRoutes");
// app.use(tempRoutes);

const aRoutes = require("./routes/aRoutes");
app.use(aRoutes);


app.listen(port, () => {
  console.log(`Backend flora app at port: ${port}`);
});
