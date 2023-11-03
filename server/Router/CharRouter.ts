import { Router } from "express";
import { readWritePrimary } from "../../keys/keys";
export const charRouter = Router();
const { MongoClient } = require("mongodb");
const client = new MongoClient(readWritePrimary, { useNewUrlParser: true });
const db = client.db("dnddb");
const chars = db.collection('characters');
const ObjectId = require('mongodb').ObjectId;

charRouter.get('/', async (req, res) => {
  try {
    res.send({message : "Pathing correct"});
  }
  catch (err) {
    res.send({message: err});
  }
});