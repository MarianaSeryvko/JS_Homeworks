// task1

// function calcRectangleArea(width, height) {
//     let S = width*height;
//     console.log(S);
//   if (isNaN(width) || isNaN(height)) {
//     throw "Not a number was entered!";
//   }
// }

// try {
//   calcRectangleArea(7, "y");
// } catch (error) {
//   console.log(error);
// }

// task2

// function checkAge(age) {
//     if (isNaN(age)) {
//     throw "Not a number was entered!";
//     }
//     if (age =="") {
//     throw "This field is empty";
//     }
//     if (age<14) {
//     throw "You are too young";
//     }
//     else {
//     console.log("Enjoy watching movies");
//     }
//     }
//     try {
//     checkAge(prompt("Pleas enter your age"));
//     }
//     catch (error) {
//     console.log(error);
//     }

// task3

// class MonthException {
// constructor(message){
//     this.message ="MonthException";}
//     }
//     function showMonthName(month) {
//     let year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     month = month-1;
//     if (month<12) {
//     return year[month];
//     } else {
//     throw "Incorrect month number";}
//     }
//     try {
//     showMonthName(15)
//     }
//     catch (error){
//     console.log(error);
//     }

// task4

// function showUser(id) {
//     if(id<0) {
//     throw "ID must not be negative";
//     } else {
//     return {"id ": id};
//     }
//     }
    
//     function showUsers(ids) {
//     let users =[];
//     for (i=0; i<users.length; i++){
//     return showUsers(ids);}
//     }
//     try {
//     showUsers([87, 67, 45, -9, 4, 15, -55]);
//     }
//     catch(error) {
//     console.log(error);
//     }



