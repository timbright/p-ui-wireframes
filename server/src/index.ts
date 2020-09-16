import express from "express";
// import http from "http";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.info(`Server is Running at http://localhost:${port}`);
});