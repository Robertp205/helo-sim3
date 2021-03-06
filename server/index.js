require('dotenv').config();
const express = require('express'),
        massive = require('massive'),
        cors = require('cors'),
        session = require('express-session'),
        chalk = require('chalk')


const authCTRL = require('./controller/auth_controller')


const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env

// app instance
const app = express()

//TLM
app.use(express.json());
app.use(cors());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 6000
    }
}))

massive(CONNECTION_STRING)
    .then(dbInstance =>{
        app.set('db', dbInstance);
        console.log(chalk.cyan('database is connected'));
        
    })
    .catch(error=> console.log(chalk.red('database connection severed'))
    )

app.listen(SERVER_PORT, ()=> console.log(chalk.cyan("Server is on mLord")
))