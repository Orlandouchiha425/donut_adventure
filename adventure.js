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
