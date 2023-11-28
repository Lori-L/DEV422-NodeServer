import { Router } from "express";
import { readWritePrimary } from "../../keys/keys";
export const userRouter = Router();
const { MongoClient } = require("mongodb");
const client = new MongoClient(readWritePrimary, { useNewUrlParser: true });
const db = client.db("dnddb");
const users = db.collection('users');
const ObjectId = require('mongodb').ObjectId;

userRouter.get("/", async (req, res) => {
  res.send("Hello from user route");
});


userRouter.get("/id?", async (req, res) => {
  try {
    var result = await users.findOne(
        {username: req.query.username}
      );
    res.send(result._id);
  }
  catch (err) {
    res.send({message: err});
  }
});

userRouter.get("/password?", async (req, res) => {
  try {
    var result = await users.findOne(
        {username: req.query.username}
      );
    if (result == null) {
      res.send({message: false});
    }
    else {
      if (req.query.password == result.password) {
        res.send({message: "true", _id: result._id});
      }
      else {
        res.send({message: "false"});
      }
    }
  }
  catch (err) {
    res.send({message: err});
  }
});

userRouter.post("/signup?", async (req, res) => {
  try {
    var result = await users.findOne(
        {username: req.body.username}
      );
    if (result != null) {
      res.send({ message: "false" });
    }
    else {
      var user = {
        _id: new ObjectId(),
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        usersShard: 0
      };
      users.insertOne(user);
      res.send({ message: "true", id: user._id });
    }
  }
  catch (err) {
    res.send({message: err});
  }
});