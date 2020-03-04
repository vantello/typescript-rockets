class Rocket{
    name: string;
    numThrusters: number;
    totalThrusters: number[];
    maxPowers: number[];
    plusPower: number;
    lessPower: number;

    constructor(name: string, numThrusters: number){
        this.name = name;
        this.numThrusters = numThrusters;
        this.totalThrusters = new Array();
        this.maxPowers = new Array();
        //En aquest cas, es suma i es resta sempre el mateix, però si fossin diferents, seria
        //interessant tenir les dues variables per augmentar i reduir el thruster's power.
        this.plusPower = 10;
        this.lessPower = 10;
        
    }
    addThruster(thrusters: number[]): void {
        // S'afegeixen els propulsors. El mètode té com a parametre d'entrada un array numèric.        
        for (let i = 0; i < thrusters.length; i++) {
            this.totalThrusters.push(thrusters[i]);
        } 
    }
    maxPower(thrustersMax: number[]): void{
        for (let i = 0; i < thrustersMax.length; i++) {
            this.maxPowers.push(thrustersMax[i]);
        } 
    }
    speedRocket(){
        //Es recorre l'array de propulsors, i es van afegint a la variable Speed.
        var speed: number = 0;
        for(let i=0; i< this.totalThrusters.length;i++){
            var speed = speed + this.totalThrusters[i]; 
        }
        return speed;
    }
    addPower(){
            for (let i=0;i<this.totalThrusters.length;i++){
                if(this.totalThrusters[i] < this.maxPowers[i]){
                    this.totalThrusters[i] = this.totalThrusters[i] + this.plusPower;
                }else{
                    console.log("Has arribat a la potència maxima del propulsor " + (i+1));
                }
            }
    }
    takeOffPower(){
        for (let i=0;i<this.totalThrusters.length;i++){
            if(this.totalThrusters[i] > 0){
                this.totalThrusters[i] = this.totalThrusters[i] - this.lessPower;
            }else{
                console.log("Has arribat a la potència maxima del propulsor " + (i+1));
            }
        }
    }
}