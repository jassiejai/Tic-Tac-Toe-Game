// clicking the button starts a new game
// addan event listener for click to run fucntion

document.getElementById("start").addEventListener("click" , startGame)

function startGame(){
    let stPlayer = prompt ('Choose your player choose 1 or 2')

    if (stPlayer == 1) {
        playOne()
    } else if (stPlayer == 2) {
        playTwo()
    }
    else {
        alert('Try again')
        
    }
    // call function for player one and player two 
}

//selcet div to put item in
document.getElementsByClassName('one')
// also create a function? or if statement that doesnt allow to choose a div that has something in it already
// choose an x or o

function xAndO() {
//click the div it enters a value of x or o
// create button that submite you box selection
}

// create a fucntion that toogles between two characters depending on the first choosen character
function turns() {
   // if xAndO is x then the next turn you should expect O it shouldnt allow for the x to be choosen 
}
//create a function for each player

function playOne() {
    alert ("You have choosen player one")
  // the function should let you choose your piece and tell you who goes first
}

function playTwo() {
    alert ("You have choosen player two")

    
}

// click the div and apply X or O using an event listener to it would i have to first work of attaching the value to a player or 





// create a function that notifies if the game is won lost or tied if not return an alert
//end game functionalluty until the new game button is hit but doesnt refresh the page 




// create a grid div with 9 other divs to the create a grid with. can used the numbered div to be able to run possible outcomes of three in a row
// add the grid styling then finish the styling (create a border and apply it to two sides)