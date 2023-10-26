import { Router } from "express";
export const userRouter = Router();

const { MongoClient, ServerApiVersion } = require("mongodb");
const { readWritePrimary } = require("../../keys/keys.ts");
const uri = readWritePrimary;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

userRouter.get("/test", async (req, res) => {
  try {
    const result = run(); // mongo function to get user
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const result = ""; // mongo function to create user
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    let isUser = false;
    const validUsername = req.body.username === "user"; // mongo function to check if user exists

    if (validUsername) {
      isUser = req.body.password === "pass"; // mongo function to check if user exists
    }

    if (isUser) {
      res.send({ message: "Successfully logged in" });
    } else {
      res.send({ message: "Incorrect username or password" });
    }
  } catch (error) {
    res.send(error);
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
  } catch (error) {
    res.send(error);
  }
});

userRouter.delete("/", async (req, res) => {
  try {
    const result = ""; // mongo function to delete user
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

async function run() {
  try {
    // Connect the client to the server    (optional starting in v4.7)
    console.log("Connecting to the db");

    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    var result =
      "Pinged your deployment. You successfully connected to MongoDB!";
    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    return "closed";
  }
}
