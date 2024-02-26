// Creating Object using Constructor Function.........

function student (firstName, lastName, standard) {
    this.firstName = firstName
    this.lastName = lastName
    this.standard = standard
    this.getfullName = function () {
         return `${this.firstName} ${this.lastName}`;
    } 
}

const student1 = new student('Harry', 'Singh', 12)
console.log(student1.getfullName());
