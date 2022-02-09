let images = ["./Images/side1.png",
"./Images/side2.png",
"./Images/side3.png",
"./Images/side4.png",
"./Images/side5.png",
"./Images/side6.png",];

let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("jiggle");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("jiggle")
        });
        let dieOne = Math.floor((Math.random()*6));
        let dieTwo = Math.floor((Math.random()*6));
        console.log(dieOne,dieTwo);
        document.querySelector("#die1").setAttribute
        ("src", images[dieOne]);
        document.querySelector("#die2").setAttribute
        ("src", images[dieTwo]);
        document.querySelector("#score").textContent = "Your score is  " + ((dieOne +1) + (dieTwo + 1));
    },
    1000
    );
}

roll();