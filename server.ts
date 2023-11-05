import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import { userRouter } from "./server/Router/UserRouter";
import { charRouter } from "./server/Router/CharRouter";

const app = express();
const port = 3000;
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:4200",
    // can configure other CORS options as needed
  })
);

app.use(express.static(path.join(__dirname, "src")));

// routes
app.use("/user", userRouter);
app.use("/char", charRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
