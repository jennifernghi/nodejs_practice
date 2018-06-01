
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('index');
});


//const Person = require(path.join(__dirname, 'objects/Person'));
const Student = require(path.join(__dirname, 'objects/Student'));
//var person1 = new Person('jennifer', 27, 'F');
//console.log("person1 " + person1.personInfo());
var stu = new Student('jennifer', 27, 'F', 3.8);
console.log("stu " + stu.getStudentInfo());
//console.log("stu person " + stu.personInfo());


app.listen(4000, () => console.log('server running on 4000'));
