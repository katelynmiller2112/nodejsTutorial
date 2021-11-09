const express = require("express")

const app = express();

app.get("/",(req, res) => {
    res.send("first request");
});

app.get("/users",(req, res) => {
    res.send("Here are your users");
});

app.listen(3000, () => {
    console.log("Listening to 3000");
});

