import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!, Welcome to Typescript world.");
});

export default app;