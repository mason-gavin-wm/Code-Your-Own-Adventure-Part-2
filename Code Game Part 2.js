function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

confirm("Are you ready to try out League of Legends?");

sleep(3000);

console.log("To make sure the game runs smoothly to continue on in the game, you must choose the words which are all caps and spell them in all caps as well. Thank you enjoy!");

sleep(3000);

console.log("Welcome to League of Legend, this is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across other players around the world.");

sleep(5000);

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

var thinking = prompt("Your character is Garen, who is  tank, melee, fighter who is very durable and can execute enemies quickly.");{

    switch(thinking) {

        case "GAREN" :

/*Garen*/

            var garenHp = 616;

            var garenTotalHp = 0;

            var garenAd = 78;

            var garenAdTotal = 0;

            var startGold = 475;

            var totalGold= 0;

            console.log("You choose Garen!");

            sleep(2500);

            console.log("Great choice! You are a very durable tank which can do a lot of damage to squishy opponents.");

            sleep(4600);

            console.log("You are waiting to load into the game");

            sleep(6500);

            console.log("Finally your in!");

            sleep(5000);

            console.log("You are facing an Olaf top. Olaf is a melee fighter that can deal a lot of damage if you stand still in front of him.");

            sleep(4000);

            console.log("You start off with 475 gold");

                var buyGaren = function(shieldOrBlade){

                    if(shieldOrBlade === "Shield"){


                        console.log("You buy a shield which gives you +80 hp. And have a little extra gold over to buy a health potion.");

                        sleep(5600);

                                         console.log("Your new hp is " + (garenTotalHp = garenHp + 80).toString());

                        sleep(2500);

                                         console.log("Your new amount of gold is " + (totalGold = startGold - 440 - 35).toString());

                        sleep(2700);

                        console.log("You begin walking into your lane up top.");

                        sleep(2400);

                        console.log("The timer of the game counts up (minutes:seconds)");

                        sleep(1000);

                        console.log("1:28");

                        sleep(1000);

                        console.log("1:29");

                        sleep(1000);

                        console.log("1:30");

                        sleep(1000);

                        console.log("MINIONS HAVE SPAWNED!");

                        sleep(4000);

                        console.log("A set of three melee minions and three ranged minions come into your lane, you finally see your opponent Olaf");

                        sleep(4600);

                        console.log("The minions start battling it out.");

                        sleep(1000);

                        console.log("(Hint: Killing minions will grant you extra gold!)");

//here
                    }

                    else{

                        console.log("You buy a blade which gives you +70hp and +8 attack damage on your sword, also enough to buy one health potion!");

                        sleep(3500);

                                         console.log("Your new attack damage amount it is " + (garenAdTotal = garenAd + 8).toString());

                        sleep(2500);

                                         console.log("Your new health is " + (garenTotalHp = garenHp + 70).toString());

                        sleep(2500);

                                         console.log("Your new amount of gold is " + (totalGold = startGold - 440 - 35).toString());

                        sleep(2700);

                        console.log("You begin walking into your lane up top.");

                        sleep(1800);

                        console.log("The timer of the game counts up (minutes:seconds)");

                        sleep(1000);

                        console.log("1:28");

                        sleep(1000);

                        console.log("1:29");

                        sleep(1000);

                        console.log("1:30");

                        sleep(1000);

                        console.log("MINIONS HAVE SPAWNED!");

                        sleep(2000);

                        console.log("A set of three melee minions and three ranged minions come into your lane, you finally see your opponent Olaf");

                        sleep(3000);

                        console.log("The minions start battling it out.");

                        sleep(2000);

                        console.log("(Hint: Killing minions will grant you extra gold!)");
                    }
                };

            buyGaren(prompt("What item would you want to buy first?(Shield/Blade)"));

            while(garenHp > 0){


            }

            break;

        default:

            console.log("You dodge the game...");

            break;

    }


}