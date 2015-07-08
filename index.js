var express = require ("express");
var app = express();

var bodyParser = require('body-parser');
var _ = require("underscore");
 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());


var users = [
        { id: 1,
          username:"sahash",
          firstname:"sahash",
          lastname:"sahash182",
          age:22
        },
        { id: 2,
          username:"john1",
          firstname:"john",
          lastname:"smith",
          age:33
        },
        { id: 3,
          username:"sandra2",
          firstname:"sandra",
          lastname:"paul",
          age:21
        }
];

app.get ('/users', function(req, res) {
    res.json(users);
})

app.get ('/users/:id', function(req, res) {
    var getID = parseInt(req.params.id);
    var foundUser = _.findWhere(users, {id: getID});
    res.json(foundUser);
})    

app.post ('/users', function(req, res) {
    var newUser = req.body;

    users.push(newUser)
    res.json(newUser);
});

app.put('/users/:id', function(req, res){
    var targetID = parseInt(req.params.id);
    var foundUser = _.findWhere(users, {id: targetID})
    foundUser.username = req.body.username;
    foundUser.firstname = req.body.firstname;
    foundUser.lastname = req.body.lastname;
    foundUser.age = parseInt(req.body.age);
    res.json(targetID);
});

app.delete('/users/:id', function(req, res){
    var targetID = parseInt(req.params.id);
    var foundUser = _.findWhere(users, {id: targetID})
    var index = users.indexOf(foundUser);
    users.splice(index, 1);
    res.json(foundUser);

});

app.listen(3000);














