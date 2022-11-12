// requiring express
const express = require('express');
// assigning port number
const port = 8000;

// intializing the datbse connection
const db = require('./config/mongoose');
// requiring database
const Contact = require('./models/contact');

// intializing express
const app = express();

// requiring path for views folder 
const path = require('path');
// telling express which veiw engine we are going to use 
app.set('view engine', 'ejs');
// setting views folder so that express can find our ejs file in views folders
app.set('views', path.join(__dirname, 'views'));
// middleware to parse the data fomr the form 
app.use(express.urlencoded());
// to acess static files
app.use(express.static('assets'));

// making array storage for our contact list.
var contactList = [
    {
        name: 'hehe',
        phone: '4565456'
    },
    {
        name: 'hehe2',
        phone: '4565456'
    },
    {
        name: 'hehe3',
        phone: '4565456'
    }
]

// get req forr hokme url
// passing contalist array to the ejs html file.
app.get('/', (req, res) => {

    // find all the contacts inside the db
    Contact.find({}, function (err, contacts) {
        if (err) {
            console.log('error in finding the contacts');
            return;
        }
        res.render('home', {
            title: 'my first',
            contact_list: contacts
        });
    })

});

// hanlding data coming form the form
app.post('/create-contact', (req, res) => {
    // contactList.push(req.body);
    // return res.redirect('/');

    // with db
    // adding contact inside the db
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function (err, newContact) {
        if (err) {
            console.log("error in creating the new contact", err);
            return;
        }
        console.log(newContact);
        return res.redirect('/');
    })
});

// delete a contact
app.get('/delete-contact/:id', (req, res) => {
    // let phone = req.params.phone;
    // let index = contactList.findIndex(contact => contact.phone == phone);
    // contactList.splice(index, 1);
    // return res.redirect('/');

    // find the contact using id which we want to delete
    let id = req.params.id;
    // find the contact using id and delete the contact
    Contact.findByIdAndDelete(id,function (err){
        if(err){
            console.log("error in deletinf the contact",err);
            return res.redirect('/');
        }
        return res.redirect('/');
    })
})

// listening to the port
app.listen(port, function (err) {
    if (err) {
        console.log("error in connecting to the express");
    }
    console.log("listening to the port " + port);
});