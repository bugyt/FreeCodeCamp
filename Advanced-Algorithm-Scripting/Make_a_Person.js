/**
 * [Person]
 * Make a Person :
 * Javascript object model with constructor and methods.
 * @param {String} firstAndLast
 */
var Person = function(firstAndLast) {

  var firstName = firstAndLast.split(' ')[0];
  var lastName = firstAndLast.split(' ')[1];

  this.setFirstName = function(first) {
    firstName = first;
  };


  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function(fullname) {
    firstName = fullname.split(' ')[0];
    lastName = fullname.split(' ')[1];
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };

};

var bob = new Person('Bob Ross');
bob.getFirstName();