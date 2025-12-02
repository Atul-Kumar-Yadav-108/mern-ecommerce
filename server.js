import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import cors from "cors"

// config env
dotenv.config()

// connect db
connectDB();

// rest object
const app = express();


// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use("/api/v1/auth",authRoute);

// rest api
app.get("/",(req,res)=>{
    res.send("Welcome Ecommerce application");
})


// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server running on mode ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.white);
})