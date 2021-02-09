const express = require("express");
// const connectDB = require("./config/db");

const app = express();

// Setting View Enginer
app.set("view engine", "ejs");

// Define Routes
app.use("/admin/", require("./routes/adminRoutes"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
