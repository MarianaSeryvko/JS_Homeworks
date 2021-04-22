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

let rez = /d(b+)d/i;
let str ="cdbBdbsbz";
console.log(str.match(rez));

// task4

let regExp = /(\w+)\s(\w+)/;
let str = 'Java Script';
let newstr = str.replace(regExp, '$2, $1');
console.log(newstr);

// task5

function numberValidation(cardNumber){
    let regExp = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (regExp.test(cardNumber)==true){
        return true;
    } else{
        return false;
    }
}
numberValidation();

// task6

function checkEmail(email){
    let regExp =/(\w)\S+@\S+\.\S+/;
    if (){
        console.log("Email is correct!");
    } else {
        console.log ("Email is not correct!");
    }
}
checkEmail();

// task7








