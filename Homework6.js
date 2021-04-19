// task1

// 1)
// document.getElementById("test").innerHTML="Last";
// 2)
// document.getElementsByTagName("div").innerHTML="Last";

// task2

    // let elem = document.getElementsByClassName("image")[0];
    // elem.src= "cat.jpg";
    // alert(elem.outerHTML);

// task3

// function elements() {
// let elem = document.querySelectorAll(#text; "p");
// for (i=0; i<elem.length; i++);
// alert("Selector text "+i+" : "+ elem[i]);
// }

// task4
// setTimeout(()=>{
// const parentElem = document.getElementById("list");
// const firstElem = parentElem.children[0].innerText;
// const secondElem = parentElem.children[1].innerText;
// const thirdElem = parentElem.children[2].innerText;
// const forthElem = parentElem.children[3].innerText;
// const lastElem = parentElem.children[4].innerText;

// alert(firstElem);
// alert(lastElem);
// alert(secondElem);
// alert(forthElem);
// alert(thirdElem);
// }, 200);

// task5

// document.body.children[0].style.backgroundColor="green";
// document.getElementById("myDiv").children[0].style.fontWeight="700";
// document.getElementById("myDiv").children[1].style.color="red";
// document.getElementById("myDiv").children[2].style.fontDecoration = "underline";
// document.getElementById("myDiv").children[3].style.fontStyle ="italic";
// document.getElementById("myList").style.listStyle = "none";
// document.getElementById("myList").style.display ="flex";
// document.getElementsByTagName("span")[0].style.display="none";

// task6

// let text1 =prompt("Please enter your Firs Name");
// let text2 = prompt("Please enter your Last Name");
// let inp1 = document.getElementById("input1");
// let inp2 = document.getElementById("input2");
// inp1.value =text1;
// inp2.value =text2;

// task7

document.getElementsByTagName("body").innerHtml = `
<main class="mainClass check item"> 	
<div id="myDiv">
<p>First paragraph</p>           
</div>
</main>`

