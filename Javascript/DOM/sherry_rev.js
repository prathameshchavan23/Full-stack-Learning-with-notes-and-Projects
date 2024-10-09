//Prototypal inheritance
function makeHuman(name,age){
    this.name = name;
    this.age = age;
    //Here both human1 and human2 are adding printMyName to there memory space so to run away from memory we use prototype where this function
    // will given a special place and both human 1 and human 2 will refer it
    // this.printMyName = function(){
    //     console.log(this);
    // }
}

makeHuman.prototype.this.printMyName = function(){
        console.log(this);
    }
const human1 = new makeHuman("Pratham",22);
const human2 = new makeHuman("Adi",23);

