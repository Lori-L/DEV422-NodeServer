import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import { indexRouter } from "./server/Router/index";
import { userRouter } from "./server/Router/UserRouter";
import { charRouter } from "./server/Router/CharRouter";

const app = express();
const port = 3000;

app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.use(
  cors({
    origin: "http://localhost:4200",
    // can configure other CORS options as needed
  })
);

app.use(express.static(path.join(__dirname, "src")));

// routes
app.use('/', indexRouter);
app.use("/user", userRouter);
app.use("/char", charRouter);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${port}/`);
});
