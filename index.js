const express = require('express');
const path = require('path');
const connection = require('./connection');
const student = require('./routes/student')
const app = express();
connection();
app.use(student);
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.listen(3000, (err) => {
    if (err) {
        console.log("err");
    } else {
        console.log("server is running...");
    }
})