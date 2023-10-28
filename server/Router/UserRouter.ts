import { Router } from "express";
import { Connect } from "./connect";
import { readWritePrimary } from "../../keys/keys";
export const userRouter = Router();
const { MongoClient } = require("mongodb");

const client = new MongoClient(readWritePrimary, { useNewUrlParser: true });
const db = client.db("dnddb");

userRouter.get("/test", async (req, res) => {
  try {
    Connect();
    res.send('Database Connected');
  }
  catch (error) {
    res.send(error);
  }
});

userRouter.get("/id?", async (req, res) => {
  try {
    var result = await db.collection('users').findOne(
      {username: req.query.username});
    res.send(result._id);
  }
  catch (err) {
    res.send(err);
  }
});

userRouter.get("/password?", async (req, res) => {
  try {
    var result = await db.collection('users').findOne(
      {username: req.query.username});
    if (req.query.password == result.password) {
      res.send("true");
    }
    else {
      res.send("false");
    }
  }
  catch (err) {
    res.send(err);
  }
});

userRouter.post("/signup", async (req, res) => {
  try {
    const isUsernameTaken = req.body.username === "user"; // mongo function to check if user exists

    if (isUsernameTaken) {
      res.send({ message: "User already exists" });
    } else {
      res.send({ message: "Successfully signed up" }); // respond with error message "user already exists"
    }
  }
  catch (error) {
    res.send(error);
  }
});

userRouter.delete("/", async (req, res) => {
  try {
    const result = ""; // mongo function to delete user
    res.send(result);
  } 
  catch (error) {
    res.send(error);
  }
});
