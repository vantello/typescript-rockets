var totalRockets: Array<Object> = [];
var x: any = totalRockets; 

//FASE 1. Es creen els coets de manera manual.
let rocket1 = new Rocket("32WESSDS", 3);
totalRockets.push(rocket1);
let rocket2 = new Rocket("LDSFJA32", 6);
totalRockets.push(rocket2);

//FASE 2
x[0].addThruster([0, 0, 0]);
x[0].maxPower([10,30,80]);
x[1].addThruster([0,0,0,0,0,0]);
x[1].maxPower([30, 40, 50, 50, 30, 10]);

function createRocket(){
    //La funció està preparada per a poguer introduir la quantitat de coets que es vulgui.
    var name: string = (<HTMLInputElement>document.getElementById("idRocket")).value;
    var thrusters: any = (<HTMLInputElement>document.getElementById("thrustersRocket")).value;
    var totalImages: Array<any> = ["../img/rocket1.jpg","../img/rocket2.jpg","../img/rocket3.jpg"]; //Array per triar les rocket img.
    var randomImage: any = totalImages[Math.floor(Math.random() * totalImages.length)]; //imatge random d'un coet.
    if(checkRocketName(name)){
        let newRocket = new Rocket(name, thrusters);
        totalRockets.push(newRocket);
        (<HTMLInputElement>document.getElementById("rocketsCreated")).innerHTML = "Has creat " + totalRockets.length + " coets. <br>";
        for(let i=0;i<totalRockets.length;i++){
            (<HTMLInputElement>document.getElementById("rocketsCreated")).innerHTML += "Rocket " + (i+1) + ": " + x[i].name + "<br>";
        }
    }else{
        if(name == ""){
            (<HTMLInputElement>document.getElementById("rocketsCreated")).innerHTML = "Rocket must have a name!";
        }else{
            (<HTMLInputElement>document.getElementById("rocketsCreated")).innerHTML = "Rocket's name must be 8 characters long!";
        }
        
    }
    //Mostrem els coets per pantalla
    (<HTMLInputElement>document.getElementById("displayRockets")).classList.remove("dNone");

    let i:number;
    for(i=1;i<=2;i++){ //for(i=1;i<=totalRocekts.length;i++), però nomès hi ha HTML creat per a dos camps.
        //començem la i en 1 per a agafar els id, i al mostrar, li restem un per agafar la posició de l'array.
        (<HTMLInputElement>document.getElementById("showNumRocket" + i)).innerHTML = "Rocket " + i;
        (<HTMLInputElement>document.getElementById("showIdNameRocket" + i)).innerHTML = x[i-1].name;
        (<HTMLInputElement>document.getElementById("showNumberThrustersRocket" + i)).innerHTML = x[i-1].numThrusters + " thrusters";
    }
    //FASE 2
    for (i=1;i<=2;i++){
        (<HTMLInputElement>document.getElementById("showThrustersRocket" + i)).innerHTML = x[i-1].totalThrusters;
        (<HTMLInputElement>document.getElementById("showMaxThrustersRocket" + i)).innerHTML = x[i-1].maxPowers;
    }
    //FASE 3
    (<HTMLInputElement>document.getElementById("showSpeedRocket1")).innerHTML = x[0].speedRocket();
    (<HTMLInputElement>document.getElementById("showSpeedRocket2")).innerHTML = x[1].speedRocket();
}
function morePower(clicked_id: any){
    switch(clicked_id) {
        case "rocket1":
            x[0].addPower();
            (<HTMLInputElement>document.getElementById("showThrustersRocket1")).innerHTML = x[0].totalThrusters;
            (<HTMLInputElement>document.getElementById("showSpeedRocket1")).innerHTML = x[0].speedRocket();
          break;
        case "rocket2":
            x[1].addPower();
            (<HTMLInputElement>document.getElementById("showThrustersRocket2")).innerHTML = x[1].totalThrusters;
            (<HTMLInputElement>document.getElementById("showSpeedRocket2")).innerHTML = x[1].speedRocket();
          break;
        default:
          console.log("default");
      }
}
function lessPower(clicked_id: any){
    switch(clicked_id) {
        case "rocket1":
            x[0].takeOffPower();
            (<HTMLInputElement>document.getElementById("showThrustersRocket1")).innerHTML = x[0].totalThrusters;
            (<HTMLInputElement>document.getElementById("showSpeedRocket1")).innerHTML = x[0].speedRocket();
          break;
        case "rocket2":
            x[1].takeOffPower();
            (<HTMLInputElement>document.getElementById("showThrustersRocket2")).innerHTML = x[1].totalThrusters;
            (<HTMLInputElement>document.getElementById("showSpeedRocket2")).innerHTML = x[1].speedRocket();
          break;
        default:
          console.log("default");
      }

}
// CHECKERS
/*
1. checkRocketName comprova que el id/name del Rocket sigui de 8 caràcters.
*/
function checkRocketName(name: string){
    if(name.length != 8){
        return false;
    }
    return true;
}