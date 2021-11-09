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


setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
},3000);

const int = setInterval(() => {
    console.log('in the interval');
},1000)


console.log(__dirname);
console.log(__filename);
