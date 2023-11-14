import express from "express";
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import routes from './routes'
import sequelize from "./config/database"

if (!process.env.NODE_PORT) {
    console.log(`No port value specified...`)
}

const PORT = process.env.NODE_PORT || 8080;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use('/', routes);

sequelize
    // .sync()
    .authenticate()
    .then(result => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`App has started on port: ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err)
    });