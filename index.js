class Ship {
    constructor(hull, firepower, accuracy, isAlive){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.isAlive = true;
        
    } assemblyAttack(){
        let randomNum = Math.random();
        console.log(`You're accuracy is ${ussAcuracy} boss!`);
        if(this.accuracy > randomNum){
            console.log(`Great shot boss! Those aliens felt that one!`);
        }
        alien1.hull = alien1.hull - this.firepower;
        console.log(`The alien has ${alien1.hull} hull points left!`);
        if(alien1.hull <= 0){
            alien1.isAlive = false;
            console.log(`Great job boss. You've taken out an Alien!`);
        } else {
            console.log(`You've missed boss. Take another shot!`);
        }
    }    retreat(){
        console.log(`Game over boss! You abandoned mankind!!!!`);
    }
}
const ussAssembly = new Ship(20,5, 0.7);
console.log(ussAssembly);

class Alien {
    constructor(hull,firepower, accuracy, isAlive){
        // logic for aliens 
        this.hull = Math.floor((Math.random() * (6 - 3)) + 3);
        this.firepower = Math.floor((Math.random() * (4 - 2)) + 2);
        this.accuracy = (Math.round((Math.random()*2)+6))/10
        this.isAlive = true;
    }
}
const alien1 = new Alien();
const alien2 = new Alien();
const alien3 = new Alien();
const alien4 = new Alien();
const alien5 = new Alien();
const alien6 = new Alien();
console.log(alien1);
console.log(alien2);
console.log(alien3);
console.log(alien4);
console.log(alien5);
console.log(alien6);
const aliensArray = [alien1,alien2,alien3,alien4,alien5,alien6]
//==========================================================================

ussAssembly.assemblyAttack()