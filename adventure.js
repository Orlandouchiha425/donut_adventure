class Hero{
    constructor(name)
        {
        this.name=name;
        this.health=100;
        
        this.sprinkeSpray=5;
        this.sugarShock=10;
        this.catchPhrashes=['i\'m fresher than day old pizza',
        'you can\'t count my calories'];

        
        }
     
        weapons={
            sprinkleSpray: 5,
            sugarShock: 10,
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
              if (enemy===this.name) {
                
                return this.announceHealth -=random
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
        const arr=Object.keys(this.weapons)
     const random = arr[Math.floor(Math.random()*arr.length)];
     
    if (enemy===this.name) {
      
      return dougie.announceHealth-=random;
    }
       
       
            
       }
}


const pizza_Rat=new Enemy('Pizza Rat');
console.log(dougie.talkSass())
console.log(pizza_Rat.talkSmack())
console.log(dougie.announceHealth())
console.log(pizza_Rat.announceHealth())


// console.log(dougie.fight(pizza_Rat)[0])
// console.log(dougie.fight(pizza_Rat))
console.log(pizza_Rat.fight(dougie))