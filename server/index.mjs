import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import apiRoutes from "./routes/api.mjs"
// Following two lines are necessary to use __dirname in ES6 module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3200;

app.use(express.static(path.join(__dirname, "../dist/cloud_resume/browser")));

app.use("/api", apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/cloud_resume/browser/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
