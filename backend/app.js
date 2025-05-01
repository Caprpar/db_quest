const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

const userRoutes = require("./routes/userRoutes");
const cardRoutes = require("./routes/cardRoutes");
const sceneRoutes = require("./routes/sceneRoutes");
const tagRoutes = require("./routes/tagRoutes");
app.use("/api", cardRoutes);
app.use("/api", sceneRoutes);
app.use("/api", tagRoutes);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Backend flora app at port: ${port}`);
});
