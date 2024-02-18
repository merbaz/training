import express from "express";
import { createConnection } from "./mongoConfig";
import userRouter from "./routes/users";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import 'dotenv/config';
import passport from "passport";
import "./middlewares/passport";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const mongoOpt = {
    mongoUrl: process.env.MONGO_CONNECTION_STRING,
    collectionName: "sessions"
}

const sessionOpt = {
    secret: "my secret",
    cookie: {maxAge: 60000 * 60 * 24},
    store: MongoStore.create(mongoOpt)
}

app.use(session(sessionOpt))

app.use(passport.initialize())
app.use(passport.session())


createConnection();


app.use('/users',userRouter )

app.listen(port,(): void => {
    console.log("server running");
});



