// Creating Object using Constructor Function...................................

// This is called Encapsulation, as we are collecting and storing all data related to Student under single unit, which is object.......
// function student(firstName, lastName, standard) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.standard = standard;
//   this.getfullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// const student1 = new student("Harry", "Singh", 12);
// console.log(student1.getfullName());
// console.log(student1.stage);

// //Abstraction........................

// function studentB(firstName, lastName, standard) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   let stage = standard;
//   this.getfullName = function () {
//     return `${this.firstName} ${this.lastName} ${stage}`;
//   };
// }

// const student2 = new studentB("Harvinder", "Singh", "IT");
// console.log(student2.stage);
// console.log(student2.getfullName());
// Getters and Setters in OOP...................

// function studentC(firstName, lastName, standard) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   let stage = standard;

//   Object.defineProperty(this, "stage", {
//     get: function () {
//       // Getter......
//       return stage;
//     },
//     set: function (value) {
//       // Setter..........
//       return typeof value === "string"
//         ? (stage = value)
//         : console.error("Please assign String value Only to stage Property");
//     },
//   });

//   this.getfullName = function () {
//     return `${this.firstName} ${this.lastName} ${stage}`;
//   };
// }

// const student3 = new studentC("Harvinder", "Singh", "IT");
// console.log(student3.stage);
// student3.stage = "ITESM";

// Creating Object using Class....................................

// class Employee {
//   constructor(username, salary, department) {
//     this.username = username;
//     this.salary = salary;
//     this.department = department;
//   }
//   getCTC() {
//     return `${this.salary * 12}`;
//   }
// }

// const employee1 = new Employee("Harry", 28000, "Software Engineer");
// console.log(employee1.getCTC());

// Inheritence in Class.....................
// class Employer extends Employee {
//   constructor(salary, position) {
//     super("", salary, "");
//     this.position = position;
//   }
// }

// const employer1 = new Employer(45000, 'CEO');
// console.log(employer1.getCTC());
// console.log(employer1.position);;

// Static Keyword in Class..................

// class Teacher {
//   constructor(name, password) {
//     this.name = name;
//     this.password = password;
//   }
//   static encryptPassword(passwordInput) {
//     return `${passwordInput}@4253$%`;
//   }
// }

// const teacher1 = new Teacher("Harvinder", "lknlnaeg");
// console.log(Teacher.encryptPassword('sges'));
// console.log(Teacher.name);
// console.log(teacher1.encryptPassword());

// class Student extends Teacher {
//     constructor(name, password) {
//       super(name, password);
//     }
//   }

// const stud = new Student("Harry", 'drgujwer');
// console.log(stud.encryptPassword());

