const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const app = express();
const testRouter = require("./routers/test");
const path = require("path");

dotenv.config();

const server = http.createServer(app);
const PORT = process.env.PORT;
const BUILD_PATH = path.join(__dirname, "../frontend/build");

server.listen(PORT)
server.on("listening", () => {
  console.log(`listening on port ${PORT}`);
})

// middlewares

app.use(express.json());
app.use(express.static(BUILD_PATH));

// routers

app.use("/test", testRouter);

app.get("*", (req, res) => {
  res.sendFile(BUILD_PATH + "/index.html");
})