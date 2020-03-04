"use strict";
var totalRockets = [];
var x = totalRockets;
//FASE 1. Es creen els coets de manera manual.
var rocket1 = new Rocket("32WESSDS", 3);
totalRockets.push(rocket1);
var rocket2 = new Rocket("LDSFJA32", 6);
totalRockets.push(rocket2);
//FASE 2
x[0].addThruster([0, 0, 0]);
x[0].maxPower([10, 30, 80]);
x[1].addThruster([0, 0, 0, 0, 0, 0]);
x[1].maxPower([30, 40, 50, 50, 30, 10]);
function createRocket() {
    //La funció està preparada per a poguer introduir la quantitat de coets que es vulgui.
    var name = document.getElementById("idRocket").value;
    var thrusters = document.getElementById("thrustersRocket").value;
    var totalImages = ["../img/rocket1.jpg", "../img/rocket2.jpg", "../img/rocket3.jpg"]; //Array per triar les rocket img.
    var randomImage = totalImages[Math.floor(Math.random() * totalImages.length)]; //imatge random d'un coet.
    if (checkRocketName(name)) {
        var newRocket = new Rocket(name, thrusters);
        totalRockets.push(newRocket);
        document.getElementById("rocketsCreated").innerHTML = "Has creat " + totalRockets.length + " coets. <br>";
        for (var i_1 = 0; i_1 < totalRockets.length; i_1++) {
            document.getElementById("rocketsCreated").innerHTML += "Rocket " + (i_1 + 1) + ": " + x[i_1].name + "<br>";
        }
    }
    else {
        if (name == "") {
            document.getElementById("rocketsCreated").innerHTML = "Rocket must have a name!";
        }
        else {
            document.getElementById("rocketsCreated").innerHTML = "Rocket's name must be 8 characters long!";
        }
    }
    //Mostrem els coets per pantalla
    document.getElementById("displayRockets").classList.remove("dNone");
    var i;
    for (i = 1; i <= 2; i++) { //for(i=1;i<=totalRocekts.length;i++), però nomès hi ha HTML creat per a dos camps.
        //començem la i en 1 per a agafar els id, i al mostrar, li restem un per agafar la posició de l'array.
        document.getElementById("showNumRocket" + i).innerHTML = "Rocket " + i;
        document.getElementById("showIdNameRocket" + i).innerHTML = x[i - 1].name;
        document.getElementById("showNumberThrustersRocket" + i).innerHTML = x[i - 1].numThrusters + " thrusters";
    }
    //FASE 2
    for (i = 1; i <= 2; i++) {
        document.getElementById("showThrustersRocket" + i).innerHTML = x[i - 1].totalThrusters;
        document.getElementById("showMaxThrustersRocket" + i).innerHTML = x[i - 1].maxPowers;
    }
    //FASE 3
    document.getElementById("showSpeedRocket1").innerHTML = x[0].speedRocket();
    document.getElementById("showSpeedRocket2").innerHTML = x[1].speedRocket();
}
function morePower(clicked_id) {
    switch (clicked_id) {
        case "rocket1":
            x[0].addPower();
            document.getElementById("showThrustersRocket1").innerHTML = x[0].totalThrusters;
            document.getElementById("showSpeedRocket1").innerHTML = x[0].speedRocket();
            break;
        case "rocket2":
            x[1].addPower();
            document.getElementById("showThrustersRocket2").innerHTML = x[1].totalThrusters;
            document.getElementById("showSpeedRocket2").innerHTML = x[1].speedRocket();
            break;
        default:
            console.log("default");
    }
}
function lessPower(clicked_id) {
    switch (clicked_id) {
        case "rocket1":
            x[0].takeOffPower();
            document.getElementById("showThrustersRocket1").innerHTML = x[0].totalThrusters;
            document.getElementById("showSpeedRocket1").innerHTML = x[0].speedRocket();
            break;
        case "rocket2":
            x[1].takeOffPower();
            document.getElementById("showThrustersRocket2").innerHTML = x[1].totalThrusters;
            document.getElementById("showSpeedRocket2").innerHTML = x[1].speedRocket();
            break;
        default:
            console.log("default");
    }
}
// CHECKERS
/*
1. checkRocketName comprova que el id/name del Rocket sigui de 8 caràcters.
*/
function checkRocketName(name) {
    if (name.length != 8) {
        return false;
    }
    return true;
}
