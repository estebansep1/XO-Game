const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X";
let running = false;

function helloWorld(){
    console.log("Hello World")
  }

   function byeWorld(){
    console.log('Bye World')
   }
   function multiCallback(callbackArray){
        callbackArray.forEach(callback => {
                callback()
        });
   }

   function singleCallback(callback){
        callback()
   }

   document.querySelector("#restartBtn").addEventListener("click",  () => {
      helloWorld()
   })
  
let manyFunctions =[helloWorld, byeWorld]
  
multiCallback(manyFunctions)
singleCallback(helloWorld)
