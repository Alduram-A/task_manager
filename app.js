const ex = require("express");
const app = ex();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();
app.use(ex.json());
app.use(ex.static("./static"));

app.use("/api/v1/tasks", tasks);
app.use(notFound);
const port = process.env.PORT || 5500;

const start = async () => {
  try {
    await connectDB(process.env.MONDO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();
