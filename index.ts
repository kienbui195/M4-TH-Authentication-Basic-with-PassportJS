import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import authRouter from "./src/routers/web.router"

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 10 }
}));
app.use(urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRouter);
app.use(express.urlencoded({ extended: false }));
mongoose.connect("mongodb://localhost:27017")
    .then(() => console.log(`DB connected`))
    .catch(err => console.log(err.message));  


app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
});