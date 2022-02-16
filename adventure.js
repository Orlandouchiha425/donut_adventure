class Hero{
    constructor(name)
        {
        this.name=name;
        this.health=100;
        
        this.sprinkeSpray=5;
        this.sugarShock=10;
        this.catchPhrashes=['i\'m fresher than day old pizza',
        'you can\'t count my calories'];
        this.weapons={
          sprinkleSpray: 5,
          sugarShock: 10,
                  }
        
        }
     
       
        talkSass(){
            return this.catchPhrashes[Math.floor(Math.random()* this.catchPhrashes.length)];
             }
        announceHealth(){
               return this.health
                }
        fight(enemy){
        const arr=Object.values(this.weapons)
        const random = arr[Math.floor(Math.random()*arr.length)];
       
              if (enemy===pizza_Rat) {
                
                 return pizza_Rat.announceHealth -=random;
                
              }
                 
                 
                      
            }
}

const dougie=new Hero ('Doughie the Donut');







class Enemy{
    constructor(name)
    {
        this.health=100;
        this.name=this.name;
        this.catchPhrashes=['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer'];
    }
    weapons={
        pepperoniStars: 5,
        cheeseGrease: 10
        
      }
      talkSmack(){
        return this.catchPhrashes[Math.floor(Math.random()* this.catchPhrashes.length)];

      }
      announceHealth(){
          return this.health
      }
      fight(enemy){
        const arr=Object.values(this.weapons)
     const random = arr[Math.floor(Math.random()*arr.length)];
  
    if (enemy===dougie) {
      
       return dougie.announceHealth =-random;
       
    }
       
       
            
       }
}


const pizza_Rat=new Enemy('Pizza Rat');
console.log(dougie.talkSass())
console.log(pizza_Rat.talkSmack())
console.log(dougie.announceHealth())
console.log(pizza_Rat.announceHealth())

console.log(dougie.fight(pizza_Rat))
console.log(pizza_Rat.fight(dougie))

//I was not able to get the fight method working, was not sure how to get the method from another class into the pizza rat and dougie class
//I played with the idea of (see below)
// class Enemy extends Hero{

//   constructor(name){
//   super(name);

//but nothing seems to work not sure what im doing wrong please let me know, i do know if we create another instance of instance Hero they will work together 
//such as our previous practice   https://replit.com/@Orlandouchiha42/Classes-Practice-W02-Day3#script.js  how arthur use the two instances from same class to "attack`"

// console.log(dougie.fight(pizza_Rat)[0])
// console.log(dougie.fight(pizza_Rat))
// console.log(pizza_Rat.fight(dougie))
// console.log(pizza_Rat.fight(dougie))
