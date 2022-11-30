import express from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express()
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000);