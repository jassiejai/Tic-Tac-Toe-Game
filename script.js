//created an array to hold the vaule of X or O
let ticTac = ["","","","","","","","",""]


// add functionality to all the divs that are created using the parent Div
let tiles = document.querySelector('.board').addEventListener("click", (tac) => {
   console.log(tac.target)        
} )

let tic = "X" || "x"
let toe = "O" || "o"



if (ticTac == tic || toe){
// would this be true or would it be = "X" || "O" 

     alert("Try again")   
} 
else if (ticTac != tic || tac ) {

   //    return tiles = ticTac
    //  console.log()
//  how would I console.log it ?

}
else {
    console.log("Not working")
}
// clicking the button starts a new game
// add an event listener for click to run fucntion
document.getElementById("start").addEventListener("click" , startGame)

function startGame(){
    let stPlayer = prompt ('Choose X or O')

    if (stPlayer == 'O') {
        playOne()
    } else if (stPlayer == 'X') {
        playTwo()
    }
    else {
        alert('Try again')
        
    }
    // call function for player one and player two 
}

//selcet div to put item in
// also create a function? or if statement that doesnt allow to choose a div that has something in it already
// choose an x or o

function xAndO() {
//this loops the array of ticTac with the turns.
  for(let t = 0; t< ticTac.length; t++){
      turns([t])
  }  
//click the div it enters a value of x or o
// create button that submite you box selection
// document.getElementsByClassName('board').addEventListener("click", (tac) => {
//     return toe
//    console.log(tac.target)        
// } )
}
let odd = [true,false,true,false,true,false,true,false,true]

// create a fucntion that toogles between two characters depending on the first choosen character
odd.forEach(function turns() {
    //pulls every odd index item and loops it
 for (let turn of odd){
   if (turn == true){
       return "playOne"
   }
   else if (turn == false){
       return "playTwo"
   }
   else {
       break
   }
  }  // if xAndO is x then the next turn you should expect O it shouldnt allow for the x to be choosen 
})


//create a function for each player
//click and item and it fills with x or o
function playOne() {
    alert ("You have choosen player one")
     
  // the function should let you choose your piece and tell you who goes first
}

function playTwo() {
    alert ("You have choosen player two")
    
}

// click the div and apply X or O using an event listener(that attaches a value?) to it would first have to attach the value to the array. 
// this if statement runs to makes sure a value hasnt already been added to the div.
if (ticTac == tic || toe){
    // would this be true or would it be = "X" || "O" 
    
         alert("Try again")   
    } 
    else if (ticTac != tic || tac ) {
    
       //    return tiles = ticTac
        //  console.log()
    //  how would I console.log it ?
    
    }
    else {
        console.log("Not working")
    }

//choose the value of  x or o and add the value to the array

// a button that restores to default


// create a function that notifies if the game is won lost or tied if not return an alert
//if not equal to 3 show this if = to 3 show this else player ones turn play twos turn
//end game functionalluty until the new game button is hit but doesnt refresh the page 




// create a grid div with 9 other divs to the create a grid with. can used the numbered div to be able to run possible outcomes of three in a row
// add the grid styling in the parent div using 1fr with spaces then finish the styling (create a border and apply it to two sides)