const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

const cardRoutes = require("./routes/cardRoutes");
const promptRoutes = require("./routes/promptRoutes");
const sceneRoutes = require("./routes/sceneRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api", cardRoutes);
app.use("/api", promptRoutes);
app.use("/api", sceneRoutes);
app.use("/api", sessionRoutes);
app.use("/api", userRoutes);

const connectionMongoDB = require("./connectionMongoDB");
connectionMongoDB();

app.listen(port, () => {
  console.log(`Backend flora app at port: ${port}`);
});
