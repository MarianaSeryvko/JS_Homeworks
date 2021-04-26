// task1

function upperCase(str){
    let regExp=/[A-Z]^[0-9]/;
    if (regExp.test(str) == true){
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
}
upperCase(); 

// task2

function checkEmail(email) {
    let regExp =/\S+@\S+\.\S+/;
    if (regExp.test(email)==true) {
        return true;
    }
    else {
        return false;
    }
}
checkEmail();

// task3

let rez = /d(b+)(d)/i;
let str ="cdbBdbsbz";
console.log(str.match(rez));

// task4

let regExp = /(\w+)\s(\w+)/;
let str = 'Java Script';
let newstr = str.replace(regExp, '$2, $1');
console.log(newstr);

// task5

function numberValidation(str){
    let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    let validation =regExp.test(str);
    if (validation){
        console.log("Card number is valid");
    } else{
        console.log("Wrong data. Please try again");
    }
}
numberValidation();

// task6

function checkEmail(str){
    let regExp =/^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]\w+)*(\.\w{2,3})+$/;
    if (regExp.test(str)){
        console.log("Email is correct!");
    } else {
        console.log ("Email is not correct!");
    }
}
checkEmail();

// task7

function checkLogin(str){
    let regExp =/^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    let result = regExp.test(str);
    let number = /[0-9\.]/g;
    let resultNum = str.match(number);
    console.log(`${str} is ${result} - ${resultNum}`);
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');








