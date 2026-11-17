// Step C7: app.js only connects the pieces, in this order
const express = require("express");
const logger = require("./middleware/logger");
const noticeRoutes = require("./routes/noticeRoutes");

const app = express();

app.use(logger);          // 1. log every request
app.use(express.json());  // 2. read JSON bodies into req.body

app.use("/notices", noticeRoutes); // 3. the routes

app.listen(3000, () => {
  console.log("Demo API on http://localhost:3000");
});
