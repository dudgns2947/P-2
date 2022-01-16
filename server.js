import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(express.static("src"));

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 💥`);

app.listen(PORT, handleListening);

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "./index.html");
});
