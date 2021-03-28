// task1

// 1)
// let x = 1;
// let y = 2;
// let res1 = String(x)+y;
// console.log(res1);
// console.log(typeof res1);

// 2)
// let x = 1;
// let y = 2;
// let res2 = Boolean(x)+String(y);
// console.log(res2);
// console.log(typeof res2);

// 3)
// let x = 1;
// let y = 2;
// let res3 = !!(x+y)
// console.log(res3);
// console.log(typeof res3);

// 4)
// let x = 1;
// let y = 2;
// let res4 = (x-y)**0.5;
// console.log(res4);
// console.log(typeof res4);

// task2

// let number = prompt("Please enter some number");
// let result = number%2 ==0 && number%7 ==0;
// console.log(result);

// task3

// let abc = [];
// abc[0] = 28;
// abc[1] = "Mariana";
// abc[2] = 8>0;
// abc[3] = null;
// console.log(abc);
// console.log(abc.length);
// abc[4] =prompt("Please enter something");
// console.log(abc[4]);
// console.log(abc);
// abc.shift(0);
// console.log(abc);

// task4

// let cities = ["Rome", "Lviv", "Warsaw"]; 
// cities.join("*");

// task5

// let isAdult = prompt("How old are you?");
// if(isAdult>18) {
// console.log("You are an adult");
// } else {
// console.log("You are too young");
// }

// task6

// let a = prompt("Please enter side1");
// let b = prompt("Please enter side2");
// let c = prompt("Please enter side3");
// let p =(Number(a)+Number(b)+Number(c))/2;
// let s = (Number(p)*(Number(p)-Number(a))*(Number(p)-Number(b))*(Number(p)-Number(c)))**0.5;

// if (Number(a)+Number(b)<Number(c)) {
// console.log("Incorrect data");
// } else {
// console.log(s.toFixed(3));
// }

// let triangle =[];
// if (Number(a)>Number(b) && Number(a)>Number(c)) {
// triangle =[a, b, c];
// } else if (Number(b)>Number(a) && Number(b)>Number(c)) {
// triangle =[b, a, c];
// } else if (Number(c)>Number(a) && Number(c)>Number(b)){
// triangle =[c, b, a];
// } 

// if (triangle[2]**2+triangle[1]**2==triangle[0]**2) {
// console.log("This is right triangle");
// } else {
// console.log ("This is not right triangle");
// }

// task7

// 1)
// let time = new Date();
// let hours = time.getHours();
// if (hours>5 && hours<=11) {
// console.log("Good Morning");
// } else if (hours>11 && hours<=17) {
// console.log("Good Afternoon");
// } else if (hours>17 && hours<=23) {
// console.log("Good Evening");
// } else if (hours>0 && hours<=5) {
// console.log("Good Night");
// }

// 2)
// switch (new Date().getHours()) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     console.log("Good Night");
//     break
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//     console.log("Good Morning");
//     break
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     console.log("Good Afternoon");
//     break
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//     console.log("Good Evening");
//     break
// }




