// task1

// 1)
// let num =[2, 3, 4, 5];
// let mult = 1;
// for (let i=0; i<num.length; i++) {
// mult = mult*num[i];
// }
// console.log(mult);

// 2)
let num =[2, 3, 4, 5];
let i=0;
let mult=1;
while (i<num.length) {
    mult=mult*num[i];
    i++;
}
console.log(mult);

// task2

// for  (let i=0; i<=15; i++) {
//     if (i%2==0) {
//     console.log(i + " is even");
//     } else {
//     console.log(i + " is odd");
//     }
//     }

// task3

// function randArray(k) {
//     let randNum =[];
//     for (i=0; i<k; i++) {
//     randNum[i]=Math.floor(Math.random()*500)+1;
//     }
//     console.log(randNum);
//     }
//     randArray(5);

// task4

// function raiseToDegree(a,b) {
//     if (Number.isInteger(a)==true && Number.isInteger(b)==true) {
//     let result = a**b;
//     console.log(result);
//     } else {
//     console.log("Wrong input");
//     }
//     }
//     raiseToDegree(Number(prompt()), Number(prompt()));

// task5

// function findMin() {
//     let minNum =[];
//     for (i=0; i<arguments.length; i++) {
//     minNum[i] = arguments[i];
//     }
//     console.log(Math.min(...minNum));
//     }
    
    // findMin(123, 987, 567, 56, 48,-567); => -567

// task6

function findUnique(arr) {
    for (i=0; i<arr.length-1; i++) {
    for (j=i+1; j<arr.length; j++) {
    if (arr[i]!=arr[j]) {
    console.log(true);
    }
    else {
    console.log(false);
    }
    }
    }
    }
    
//     findUnique([56, 23, 90, 15, 56]);

// task7

// function lastNum(arr, x) {
//     for (i=1; i<=x; i++){
//     console.log(arr[arr.length-i])
//     }
//     }
    
//     lastNum([3, 4, 5, 6, 7, 8, 9, 10], 5);

// task8

// function upcFirst(str) {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
//     }
//     upcFirst("mariana");

    