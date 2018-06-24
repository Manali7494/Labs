// METHODS
let rabbit = {};
rabbit.speak = function(line){
    return (`The Rabbit says ${line}`)

}

function speak(line){
    console.log(`The ${this.type} rabbit says ${line}`)
}

console.log(rabbit.speak("I love life"))
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting");


hungryRabbit.speak("I could use a carrot right now.")


speak.call(hungryRabbit, "Burp!")

///////////////////
// ARROW FUNCTIONS DO NOT BIND THIS ITSELF BUT CAN SEE BIND AROUND THEM!
// ie get the previous this instead of creatinga  new this. (ie do not need to bindd it)
function normalize(){
    console.log(this.coords.map (n => n/this.length))
}
normalize.call({coords:[0,2,3], length: 5})