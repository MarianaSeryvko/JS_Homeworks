// task1

// let newWin =window.open("", "", "width=300,height=300");
// function changeWindow (){
//     newWin.resizeTo(500, 500);
// }
// setTimeout(changeWindow, 2000);

// function moveWindow() {
//     newWin.moveTo(200,200);
// }
// setTimeout(moveWindow, 4000);

// function closeWindow(){
//     newWin.close();
// }
// setTimeout(closeWindow, 6000);

// task2

// function changeCSS(){
// document.getElementById("text").style.backgroundColor="orange";
// document.getElementById("text").style.fontSize="20"; 
// document.getElementById("text").style.fontFamily="Comic Sans MS"; 
// }

// task3

// function Click(){
// document.getElementsByTagName("body")[0].style.backgroundColor="blue";
// }
// function DoubleClick(){
// document.getElementsByTagName("body")[0].style.backgroundColor="pink";
// }
// function Hold(){
// document.getElementsByTagName("body")[0].style.backgroundColor="brown"; 
// }
// function Up(){
// document.getElementsByTagName("body")[0].style.backgroundColor="white"; 
// }
// function MouseOver(){
// document.getElementsByTagName("body")[0].style.backgroundColor="yellow"; 
// }
// function MouseOut(){
// document.getElementsByTagName("body")[0].style.backgroundColor="white"; 
// }

// task4

// function deleteName(){
// let rmv = document.getElementById("delete");
// rmv.remove(rmv.selectedIndex);
// }

// task5

// function buttonClick(){
//     let message = document.getElementById("message");
//     console.log(message);
//     let node = document.createTextNode("I was pressed!");
//     console.log(node);
//     message.appendChild(node);
// }

// function buttonHover(){
//     document.getElementById("message").appendChild(document.createTextNode("Mouse on me!"));
// }

// function buttonOut() {
//     document.getElementById("message").appendChild(document.createTextNode("Mouse on me!"));
// }

// task6

// function openWin() {
//     let w = window.innerWidth;
//     let h = window.innerHeight;
//     document.getElementById("text").innerHTML = "Width: " + w + "; Height: " + h;
//   }
//   window.addEventListener("resize", openWin);

// task7

// function createCities(){
//     let country=document.getElementById("country").value;
//     let cities =[];
//     if (country=="ger"){
//         cities=["Berlin", "Munich"];
//     } else if (country =="usa"){ 
//         cities=["Chicago", "New-York"];
//     } else {
//         cities=["Lviv", "Kyiv", "Ternopil"];
//     }
    
//     let misto = document.getElementById("cities");
//     misto.innerHTML="";
//     for(i=0; i<cities.length; i++){
//         let city=document.createElement("option");
//         city.text=cities[i];
//         misto.add(city);
//     }
// }


