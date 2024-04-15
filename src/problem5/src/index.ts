import * as bodyParser from "body-parser";
import * as cors from "cors";
import 'dotenv/config';
import * as express from "express";
import helmet from "helmet";
import "reflect-metadata";
import { myDataSource } from "./config/db.config";
import { errorMiddleware } from "./exceptions/common.exception";
import routes from "./routes";


//Connects to the Database -> then starts the express
myDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
})

const app = express();

// Call midlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

//Set all routes from routes folder
app.use("/", routes);
app.use(errorMiddleware)

app.listen(3000, () => {
    console.log("Server started on port 3000!");
});