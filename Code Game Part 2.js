function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

confirm("Are you ready to try out League of Legends?");

console.log("Welcome to League of Legend, this is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across other players around the world.");

sleep(2000);

console.log("First we have to choose what champion you would like to play as...");

sleep(2000);

var greetings = function(name){

    console.log("Welcome "+ name + "!");

};

greetings(prompt("What is your name?"));

var PlayerName = function(ingame){

    console.log("Finally "+ ingame + " we are ready to get started!");
};

PlayerName(prompt("What will you choose to be your in-game name player?"));