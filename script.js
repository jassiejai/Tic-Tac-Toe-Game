//created an array to hold the vaule of X or O
let ticTac = [null,null,null,null,null,null,null,null,null]
let tic = "O"
let toe = "X"
let currentTurn = toe

//Start button with player selection
document.getElementById("start").addEventListener("click" , startGame)

 function startGame() {

     stPlayer = prompt ('Choose X or O')

//store value or prompt and convert to "O"
    if (stPlayer =="O") {
        alert("You are player one")
        xAndO()
    } else if (stPlayer == "X") {
        alert("You are player two. Player one will got first")
        xAndO()
        
    }
    else {
        alert('Try again')
        startGame()
    }
    // call function for player one and player two 
}
document.getElementById("restart").addEventListener("click" , restartGame)
function restartGame() {

    rePlayer = prompt ('Would you like to  start another game Y or N')

//store value or prompt and convert to "O"
   if (rePlayer =="Y") {
      ticTac = [null,null,null,null,null,null,null,null,null]

   } 
   else {
       alert('Have a good day')
   }
   // call function for player one and player two 
}

function xAndO(){

document.querySelector('.board').addEventListener("click", function (ta) {
      
//     boxNum = ta.target.textContent        

//     if(!ticTac[boxNum]){
//         ticTac[boxNum] = currentTurn
//         // currentTurn = currentTurn == tic ? toe : tic
//         //trying to add functions as the null paramater
//         ta.target.innerText = currentTurn
//         console.log(currentTurn)
//         //how do I add the x or o to reflect on the grid
        
//     }
//     else{
//       console.log("Problem")
//     }
    
//     console.log(ticTac)
// }
// )}
boxNum = ta.target.textContent        

if(currentTurn === "O"){
    currentTurn = "X"
    ta.target.innerText = "X"
    console.log(currentTurn)
    ticTac.splice(boxNum, 1, "X")  

    // // currentTurn = currentTurn == tic ? toe : tic
    // //trying to add functions as the null paramater
    // ta.target.innerText = currentTurn
    // console.log(currentTurn)
    //how do I add the x or o to reflect on the grid
    
}
else if (currentTurn === "X"){
  currentTurn = "O"
  ta.target.innerText = "O"
  console.log(currentTurn)
  ticTac.splice(boxNum, 1, "O")  

}
else {
    alert("try again")
}
console.log(ticTac)
}
)}

let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//interate over array to check the winnig arrays if statement firstsqure == second && second ==thirt
//then check it all goes into for loop
function win(ticTac){
    for(let i =0; i <= ticTac.length; i++){
    let whoWon = wins[[i]]
   const whoWon1 = wins[0]
   const whoWon2 = wins[1]
   const whoWon3 = wins[2]


if (whoWon1 == whoWon2 && whoWon2 == whoWon3){
    alert ("You have won")
}
else {
    alert ("noone has won")


}}}

// let tiles = function (ta) {
//     //    console.log(tac.target.textContent) 
//         boxNum = ta.target.textContent
//        //use this to replace items in the array  
        

//         if(!ticTac[boxNum]){
//             ticTac[boxNum] = currentTurn
//             ta.target.innertext = currentTurn
//             currentTurn = currentTurn == playOne() ? playTwo() : playOne()
//         }
// }




function playOne() {
    // Alerts the player whos turn it is 
    alert ("Player one it is your turn")
     // add functionality to all the divs that are created using the parent Div

          tic = document.querySelector('.board').addEventListener("click", (tac) => {
        //    console.log(tac.target.textContent) 
            chosenBoxNumber = parseInt(tac.target.textContent)
           //use this to replace items in the array  
             ticTac.splice(chosenBoxNumber, 1, "O")  
             console.log(ticTac)
    
         })

    }











// 
//onclick causes div value to change

// let tic = "X" 
// let toe = "O"



// if (ticTac == tic || toe){
// // would this be true or would it be = "X" || "O" 

//      alert("Try again")   
// } 
// else if (ticTac != tic || tac ) {

//    //    return tiles = ticTac
//     //  console.log()
// //  how would I console.log it ?

// }
// else {
//     console.log("Not working")
// }
// clicking the button starts a new game
// add an event listener for click to run fucntion


//selcet div to put item in
// also create a function? or if statement that doesnt allow to choose a div that has something in it already
// choose an x or o

// function xAnjdO() {

//this loops the array of ticTac with the turns.
//   for(let t = 0; t< ticTac.length; t++){
//       turns([t])
//   }  
//click the div it enters a value of x or o
// create button that submite you box selection
// document.getElementsByClassName('board').addEventListener("click", (tac) => {
//     return toe
//    console.log(tac.target)        
// } )
// }

// xAndO()
// let odd = [true,false,true,false,true,false,true,false,true]

// // create a fucntion that toogles between two characters depending on the first choosen character
// function turns() {
//     //pulls every odd index item and loops it
//  for (let turn of ticTac){
//    if (turn == tic){
//        return playOne()
//    }
//    else if (turn == toe ){
//        return playTwo()
//    }
//    else {
//        break
//    }
//   }  // if xAndO is x then the next turn you should expect O it shouldnt allow for the x to be choosen 
// }

// true and false using !


//create a function for each player
//click and item and it fills with x or o
// function playOne() {
// // function that 
// alert ("You have choosen player one")
//  // add functionality to all the divs that are created using the parent Div
//  if(stPlayer == "O"){
//       tic = document.querySelector('.board').addEventListener("click", (tac) => {
//     //    console.log(tac.target.textContent) 
//         choosenBoxNumber = parseInt(tac.target.textContent)
//        //use this to replace items in the array  
//          ticTac.splice(choosenBoxNumber, 1, "O")  
//          console.log(ticTac)
//         return "X"

//      })}
//  else{
//      playTwo()
//  }
//     //     if(playOne()){
        
//     //   }
//     //   else if (playTwo()) {
//     //     ticTac.splice(choosenBoxNumber, 1, "O") 
//     //   }
//     //   else {
//     //       return turns()
//     //   }
       
//   // the function should let you choose your piece and tell you who goes first
// }

function playTwo() {
    alert ("Player Two it is your turn")
    toe = document.querySelector('.board').addEventListener("click", (tace) => {
        //    console.log(tac.target.textContent) 
            choosenBoxNumber = parseInt(tace.target.textContent)
           //use this to replace items in the array  
             ticTac.splice(choosenBoxNumber, 1, "X")  
             console.log(ticTac)
           
        })}
 

// click the div and apply X or O using an event listener(that attaches a value?) to it would first have to attach the value to the array. 
// this if statement runs to makes sure a value hasnt already been added to the div.
// if (ticTac == tic || toe){
//     // would this be true or would it be = "X" || "O" 
    
//          alert("Try again")   
//     } 
//     else if (ticTac != tic || tac ) {
    
//        //    return tiles = ticTac
//         //  console.log()
//     //  how would I console.log it ?
    
//     }
//     else {
//         console.log("Not working")
//     }

//choose the value of  x or o and add the value to the array

// a button that restores to default


// create a function that notifies if the game is won lost or tied if not return an alert
//if not equal to 3 show this if = to 3 show this else player ones turn play twos turn
//end game functionalluty until the new game button is hit but doesnt refresh the page 
// let wins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// //interate over array to check the winnig arrays if statement firstsqure == second && second ==thirt
// //then check it all goes into for loop
// function win(ticTac){
//     for(let i =0; i <= ticTac.length; i++){
//     let whoWon = wins[[i]]
//    const whoWon1 = wins[0]
//    const whoWon2 = wins[1]
//    const whoWon3 = wins[2]


// if (whoWon1 == whoWon2 && whoWon2 == whoWon3){
//     alert ("You have won")
// }
// else if (playTwo == wins){
//     alert ("player one has won")


// }}}
// create a grid div with 9 other divs to the create a grid with. can used the numbered div to be able to run possible outcomes of three in a row
// add the grid styling in the parent div using 1fr with spaces then finish the styling (create a border and apply it to two sides)