const express = require('express');
const app = express();
const port = 8000;

// setting up view engine
app.set('view engine', 'ejs');
app.set('views' , './views');

// ṣending all the request to the home router
app.use('/', require('./routes'));


app.listen(port, function (err) {
    if (err) {
        console.log("error in running the server", err);
    }
    console.log(`server is up and running on port ${port}`);
});