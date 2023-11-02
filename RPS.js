const prompt = require('prompt-sync') ();
const color = require('ansi-colors');
//start with the different outputs
const choose = ["ROCK", "PAPER", "SCISSORS"];

let playtime = true;
let score = 0;
let round = 1;
//start a loop to prompt the user for each time they finish the game
while (playtime) {

    //random choice from arrey choose for the comp.

    let compIndex = Math.floor(Math.random()*3);

    let compChoice = choose[compIndex];

    let newRound = "";


    //user input

    let userchoice = "";

    do {
        userchoice = prompt ("choose between rock, paper and scissors? ");

    }while(!choose.includes(userchoice.toUpperCase()));

    let userIndex = choose.indexOf(userchoice);

    // diplay the different outcomes

    console.log("I chose "+compChoice);
    console.log("you chose "+ userchoice.toUpperCase());

    if (compIndex === userIndex){
       console.log(color.blue("its a draw :< "));
    }
    else if (((compIndex === 0 && userIndex === 1) || (compIndex === 1 && userIndex === 2)) || (compIndex === 2 && userIndex === 0)){
        console.log(color.green("You win! "));
        score ++;
    }
    else{
        console.log(color.red("You lose :} "));
    }
    do{
        newRound = prompt ("Do you want to play another round?[y/n] ");
    } while(newRound != "y" && newRound != "n");
    
    if (newRound === "n")
        playtime = false;
    else {
        playtime = true;
        round++;
    }

}

console.log("Thank you for playing with me :]\n");
console.log("you won: "+score+" out of "+round+" rounds");
