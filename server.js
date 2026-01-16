const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

let tasks = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { tasks });
});

app.post("/add", (req, res) => {
    const { task } = req.body;
    if (task) tasks.push(task);
    res.redirect("/");
});

app.post("/delete/:index", (req, res) => {
    const index = req.params.index;
    tasks.splice(index, 1);
    res.redirect("/");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));