const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

const cardRoutes = require("./routes/cardRoutes");
app.use("/api", cardRoutes);

app.listen(port, () => {
  console.log(`Backend flora app at port: ${port}`);
});
