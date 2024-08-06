import express from "express";
import env from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import db from "./Model/index.js";
import router from "./routes/userRoutes.js";

env.config();

const PORT = process.env.PORT || 8080;

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
app.use('/api/users', router)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))