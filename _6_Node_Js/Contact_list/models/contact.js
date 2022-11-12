// file for contact schema

// as we need mongoose to create a schema of a document of the collection or databse.
const mongoose = require('mongoose');

// creating schema using mongoose
const contactSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    phone: {
        type: 'String',
        required: true
    }
});

// under what name we want our collectio to be stored inside the database
const Contact = mongoose.model('Contact', contactSchema);

// now export the model or databse named as Contact to use it inside the main file. 
module.exports = Contact;

