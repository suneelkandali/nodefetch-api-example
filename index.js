import fetch from "node-fetch";
import express from "express";

const app = express();

const PORT = "8000";

app.get("/", (req, res) => {
    res.send(`Server listening on Port ${PORT}`);
});

app.get("/getAddress", async (req, res) => {
    const address = fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((user) => {
            return user.address;
        });

    const printAddress = () => {
        const a = address;
        console.log(a);
        return a;
    };

    res.send(await printAddress());
});

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup");
    console.log(`Server listening on Port ${PORT}`);
});
