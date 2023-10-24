import * as express from "express";
import * as path from "path";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "src")));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://www.dnd5eapi.co/api/classes/paladin/levels?subclass=berserker"
    );
    console.log(result);
    res.end();
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
