// requiring express
const express = require('express');
// assigning port number
const port = 8000;

// intializing express
const app = express();

// requiring path for views folder 
const path = require('path');
// telling express which veiw engine we are going to use 
app.set('view engine', 'ejs')
// setting views folder so that express can find our ejs file in views folders
app.set('views' , path.join(__dirname, 'views'))

// get req forr hokme url
app.get('/', (req, res) => {
    res.render('home', {title: 'my first'});
})

// listening to the port
app.listen(port, function (err) {
    if (err) {
        console.log("error in connecting to the express");
    }
    console.log("listening to the port " + port);
});