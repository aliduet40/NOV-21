import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import borrowRoutes from "./routes/borrowRoutes.js";

// load environmnent variables
dotenv.config();

const app = express();

// convert request body into JSON format
app.use(express.json());

// books routes
app.use("/books", bookRoutes);

// Members routes
app.use("/members", memberRoutes);

// Borrow routes
app.use("/borrow", borrowRoutes);

// create default route
app.get("/", (req, res) => {
    res.send("Welcome to Books API");
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
