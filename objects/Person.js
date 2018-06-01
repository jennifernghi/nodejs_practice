function Person(name, age, gender){
    console.log('obj instantiated');
    this._name = name;
    this._age=age;
    this._gender=gender;
};

var method = Person.prototype;

method.personInfo = function(){
        return "Person info: \n   name: " + this._name + " \n   age: " + this._age + " \n   gender: "+ this._gender +"\n";
};

module.exports = Person;