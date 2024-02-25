import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})


try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    }) 
} catch (error) {
    console.error("ERROR",error);
    throw error;
}
