"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(name, numThrusters) {
        this.name = name;
        this.numThrusters = numThrusters;
        this.totalThrusters = new Array();
        this.maxPowers = new Array();
        //En aquest cas, es suma i es resta sempre el mateix, però si fossin diferents, seria
        //interessant tenir les dues variables per augmentar i reduir el thruster's power.
        this.plusPower = 10;
        this.lessPower = 10;
    }
    Rocket.prototype.addThruster = function (thrusters) {
        // S'afegeixen els propulsors. El mètode té com a parametre d'entrada un array numèric.        
        for (var i = 0; i < thrusters.length; i++) {
            this.totalThrusters.push(thrusters[i]);
        }
    };
    Rocket.prototype.maxPower = function (thrustersMax) {
        for (var i = 0; i < thrustersMax.length; i++) {
            this.maxPowers.push(thrustersMax[i]);
        }
    };
    Rocket.prototype.speedRocket = function () {
        //Es recorre l'array de propulsors, i es van afegint a la variable Speed.
        var speed = 0;
        for (var i = 0; i < this.totalThrusters.length; i++) {
            var speed = speed + this.totalThrusters[i];
        }
        return speed;
    };
    Rocket.prototype.addPower = function () {
        for (var i = 0; i < this.totalThrusters.length; i++) {
            if (this.totalThrusters[i] < this.maxPowers[i]) {
                this.totalThrusters[i] = this.totalThrusters[i] + this.plusPower;
            }
            else {
                console.log("Has arribat a la potència maxima del propulsor " + (i + 1));
            }
        }
    };
    Rocket.prototype.takeOffPower = function () {
        for (var i = 0; i < this.totalThrusters.length; i++) {
            if (this.totalThrusters[i] > 0) {
                this.totalThrusters[i] = this.totalThrusters[i] - this.lessPower;
            }
            else {
                console.log("Has arribat a la potència maxima del propulsor " + (i + 1));
            }
        }
    };
    return Rocket;
}());
