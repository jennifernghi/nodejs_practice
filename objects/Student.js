const path = require("path");
var _super = require(path.join(__dirname,'Person'));
//method creates a new object, using an existing object to provide the newly created object's __proto__ 
Student.prototype = Object.create(_super.prototype);

function Student(name, age, gender, gpa){
    //call() This function basically allows you to call a function defined 
    //somewhere else, but in the current context.
    _super.call(this, name, age, gender);
    this._gpa=gpa;
}

Student.prototype.getStudentInfo = function(){
    return this.personInfo()+ "   Student info: \n      gpa: "+ this._gpa+"\n";
}
//returns a reference to the Object constructor function that created 
//the instance object. Note that the value of this property 
//is a reference to the function itself, not a string containing 
//the function's name.
Student.prototype.constructor = Student;
module.exports = Student;