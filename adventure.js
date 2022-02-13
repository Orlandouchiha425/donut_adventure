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
        fight(){
            console.log('I\'m ready to rumble')
        }
}

const dougie=new Hero ('Doughie the Donut');
console.log(dougie.announceHealth())
console.log(dougie.talkSass())
// console.log(dougie.weapons[0])
console.log(dougie.sugarShock)
console.log(dougie.weapons.sprinkleSpray)




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
      fight(){
          console.log('i\'m gonna flatten you like a slice of pepperoni!')
      }
}


const pizza_Rat=new Enemy('Pizza Rat');
console.log(pizza_Rat.talkSmack())