import express from "express";
import dotenv from "dotenv";
dotenv.config({ quiet: true });
import connectToMongoDB from "./db/connectToMongoDB.js";

import authRouter from "./routes/auth.route.js";

let app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(3000, () => {
    connectToMongoDB();
    console.log("Server running on PORT 3000");
});
