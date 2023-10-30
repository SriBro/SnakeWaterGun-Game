let playAgain = true;
let recordYou = 0;
let recordComputer = 0;
while (playAgain) {
    let choice1 = prompt("Enter choice1: ");
    let randomIndex = Math.floor(Math.random() * 3);
    let characters = ['s', 'w', 'g'];
    let choice2 = characters[randomIndex];
    if (choice1 == 's') {
        if (choice2 == 'w') {
            alert("Your choice " + choice1 + " and computer choice is " + choice2);
            alert("you win");
            recordYou++;
        }
        else if (choice2 == "g") {
            alert("Your choice " + choice1 + " and computer choice is " + choice2);
            alert("computer wins");
            recordComputer++;
        }
        else {
            alert("tie");
        }
    }
    else if (choice1 == 'w') {
        if (choice2 == 's') {
            alert("Your choice " + choice1 + " and computer choice is " + choice2);
            alert("computer wins");
            recordComputer++;
        }
        else if (choice2 == 'g') {
            alert("Your choice " + choice1 + " and computer choice is " + choice2);
            alert("you win");
            recordYou++;
        }
        else {
            alert("Your choice " + choice1 + " and computer choice is " + choice2);
            alert("tie");
        }
    }
    else {
        if (choice2 == 's') {
            alert("Your choice " + choice1 + " and computer choice is " + choice2);
            alert("you win");
            recordYou++;
        }
        else if (choice2 == 'w') {
            alert("Your choice " + choice1 + " and computer choice is " + choice2);
            alert("computer wins");
            recordComputer++;
        }
        else {
            alert("Your choice " + choice1 + " and computer choice is " + choice2);
            alert("tie");
        }
    }
    playAgain = confirm("Do you want to play again?");
}
alert("Your score: "+recordYou+" and computer score: "+recordComputer);
if(recordYou > recordComputer){
    alert("Hence, You win");
}
else if(recordYou < recordComputer){
    alert("Hence, Computer wins");
}
else{
    alert("You both are tied");
}
