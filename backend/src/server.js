import dotenv from "dotenv";
import app from "./app.js";
import pool from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const startserver = async () => {

    try {
        // for starting server on a particular port
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        // for checking database connection
        await pool.getConnection();
        console.log("Database connected");
    } catch (error) {
        // will cathc error and if error will be there will output it
        console.log(error);
    }
}

startserver();


