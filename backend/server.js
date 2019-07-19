const express = require("express");
const mongoose = require("mongoose");
const dbRoutes = require("./routes/databaseAccess.js");

const app = express();

app.use(express.static("build"));
app.use("/db", dbRoutes);

const connect = process.env.MONGODB_URI;
mongoose.connect(connect);

app.listen(3000, () => {
  console.log("Server for React Todo App is listening on port 3000");
});
