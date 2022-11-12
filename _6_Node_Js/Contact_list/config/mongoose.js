// require mongoose
const mongoose = require('mongoose');

// connect mongoose to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

// acquiring that connection between mongoose and the database
const db = mongoose.connection;

// if connection not made
db.on('error', console.error.bind(console, 'error connecting to the db'));

// if connection made successfully
db.once('open', function () {
    console.log('succesfully conected to the database');
});


// collection of collection is called database
// inside a collection there are many objects and these objeets are called documents.