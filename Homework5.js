// task1

// function propsCount(currentObject) {
//     let arr = Object.keys(currentObject);
//     return arr.length;
// }
//     let mentor = { 
//         course: "JS fundamental", 
//         duration: 3,
//         direction: "web-development" 
//     };
// propsCount(mentor);

// task2

// function showProps(obj) {
//     let keys = Object.keys(obj);
//     let values = Object.values(obj);
//     console.log(keys);
//     console.log(values);
// }
// let mentor = { 
//         course: "JS fundamental", 
//         duration: 3,
//         direction: "web-development",
//         firstName: "John",
//         lastName: "Smith",
//         };
// showProps(mentor);

// task3

// class Person {
//     constructor(name, surname) {
//       this.name=name;
//       this.surname=surname;  
//     }
//     showFullName(){
//         return this.surname + " " +this.name;
//     }
// } 
// class Student extends Person {
//     constructor(name,surname,year){
//         super(name,surname);
//         this.year = year;
//     }
//     showFullName(midleName){
//         return this.surname + " " +this.name+ " "+ midleName;

//     }
//     showCourse(){
//         return new Date().getFullYear()-this.year;
//     }
// }
// let stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 5

// task4

// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName=fullName;
//         this.dayRate=dayRate;
//         this.workingDays=workingDays;
//     }
//     showSalary(){
//         console.log(this.dayRate*this.workingDays);
//     }
//     #experience =1.2;
//     showSalaryWithExperience(){
//         console.log(this.getSalaryWithExperience());
//     }
//     getSalaryWithExperience(){
//         return this.dayRate*this.workingDays*this.#experience;
//     }
//     get showExp(){
//         return this.#experience;
//     }
//     set setExp(value){
//         this.#experience =value;
//     }
// }
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("Old experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// let worker3 = new Worker("Andy Ander", 29, 23);
// let arr = [worker1, worker2, worker3];
// arr.sort(function (a, b) {
//     return a.getSalaryWithExperience() - b.getSalaryWithExperience();
//   });
//   console.log("Sorted salary:");
// arr.forEach(w=>{
//     console.log(w.fullName +": "+w.getSalaryWithExperience());
// })

// task5

// class GeometricFigure {
//     getArea() {
// return 0;
// }
// toString() {
// return Object.getPrototypeOf(this).constructor.name;
// }
// }
// class Triangle extends GeometricFigure {
//     constructor (a, b, c){
//         super();
//         this.a =a;
//         this.b=b;
//         this.c=c;
//     }
//     getArea() {
//         let p = (this.a+this.b+this.c)/2;
//         let s = (p*(p-this.a)*(p-this.b)*(p-this.c))**0.5;
//         return s;
//     }

// }
// class Square extends GeometricFigure {
//     constructor(x){
//         super();
//         this.x=x;
//     }
//     getArea() {
//         return this.x*this.x;
//     }
// }
// class Circle extends GeometricFigure {
//     constructor(r){
//         super();
//         this.r=r;
//     }
//     getArea() {
//         return Math.PI*(this.r*this.r);
//     }
// }
// function handleFigures(figures){
//     // const fig = figures[0];
//     figures.forEach(fig=> console.log("Geometric Figure:" + fig.toString()+"- area:" + fig.getArea()))
    
// }
// const figures = [new Triangle(4, 5, 3), new Square(7), new Circle(5)];
//     handleFigures(figures);
//     let totalS=0;
//     figures.forEach(fig=>totalS+=fig.getArea());
// console.log(totalS);


