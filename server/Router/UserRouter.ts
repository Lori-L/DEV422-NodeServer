import { Router } from "express";
export const userRouter = Router();

userRouter.get("/:userId", async (req, res) => {
  try {
    const result = ""; // mongo function to get user
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

userRouter.delete("/", async (req, res) => {
  try {
    const result = ""; // mongo function to delete user
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});
