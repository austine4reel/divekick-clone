import Phaser from "phaser";

import red_l_idle from "../assets/botwar/red_l_idle.png"
import red_r_idle from "../assets/botwar/red_r_idle.png"
import red_r_attac from "../assets/botwar/red_r_attac.png"
import red_l_attac from "../assets/botwar/red_l_attac.png"

import blue_l_idle from "../assets/botwar/blue_l_idle.png"
import blue_r_idle from "../assets/botwar/blue_r_idle.png"
import blue_l_attac from "../assets/botwar/blue_l_attac.png"
import blue_r_attac from "../assets/botwar/blue_r_attac.png"

import blue_l_wea from "../assets/botwar/blue_l_wea.png"
import blue_r_wea from "../assets/botwar/blue_r_wea.png"
import red_l_wea from "../assets/botwar/red_l_wea.png"
import red_r_wea from "../assets/botwar/red_r_wea.png"

import logo from "../assets/botwar/background.png"
import ground from "../assets/botwar/ground.png"
//import right_weapon from "../assets/right_weapon.png"

var platforms;
var cursor;
var notground_1;
var notground_2;
var weapon1;
var weapon2;
var shot_1, shot_2;
var score1 = 0;
var score2 = 0;
var Round = 0;
var scoreText1, scoreText2, RoundText, field1, field2, Text;


export default class gamescene extends Phaser.Scene
{

constructor() {
super({key: "gamescene"});
}

preload()
{
//this.load.image("weapon1", weapon1)
this.load.image("logo", logo)
this.load.image("ground", ground)
this.load.image("red_l_idle", red_l_idle)
this.load.image("red_r_idle", red_r_idle)
this.load.image("red_l_attac",red_l_attac)
this.load.image("red_r_attac",red_r_attac)
this.load.image("red_r_wea",red_r_wea)
this.load.image("red_l_wea",red_l_wea)
this.load.image("blue_l_idle",blue_l_idle)
this.load.image("blue_r_idle",blue_r_idle)
this.load.image("blue_l_attac",blue_l_attac)
this.load.image("blue_r_attac",blue_r_attac)
this.load.image("blue_r_wea",blue_r_wea)
this.load.image("blue_l_wea",blue_l_wea)
}

create()
{
scoreText1 = this.add.text(16, 16, 'score1: 0', { fontSize: '32px', fill: '#000' });
scoreText2 = this.add.text(1100, 16, 'score2: 0', { fontSize: '32px', fill: '#000' });

RoundText  = this.add.text(640, 16, 'Round: 0', { fontSize: '32px', fill: '#000' });


cursor = this.input.keyboard.createCursorKeys();
//1280, 768

this.player1Sprite = this.physics.add.sprite(200,200, "red_r_idle");
this.player1Sprite.setBounce(0);
this.player1Sprite.setCollideWorldBounds(true);
this.player1Sprite.setGravityY(400);
this.player1Sprite.body.velocity.x= 0;
this.player1Sprite.body.velocity.y= 0;

this.player2Sprite = this.physics.add.sprite(1100,200, "blue_l_idle");

this.player2Sprite.setBounce(0);
this.player2Sprite.setCollideWorldBounds(true);
this.player2Sprite.setGravityY(400);
this.player2Sprite.body.velocity.x= 0;
this.player2Sprite.body.velocity.y= 0;

var background = this.add.image(640,389, "logo");
background.depth = -50;

shot_1 =false;
shot_2 = false;
platforms = this.physics.add.staticGroup();
platforms.create(640, 668, 'ground').setScale(1).refreshBody();
this.physics.add.collider(this.player1Sprite,platforms);
this.physics.add.collider(this.player2Sprite,platforms);
this.physics.add.collider(this.player1Sprite,this.player2Sprite);
//animation for red
this.anims.create
(
{

key: "red_idle_left",

frames: "red_l_idle",

repeat: -1

}

)




this.anims.create

(

{

key: "red_idle_right",

frames: "red_r_idle",

repeat: -1

}

)

this.anims.create

(

{

key: "red_attac_left",

frames: "red_l_attac",

repeat: -1

}

)




this.anims.create

(

{

key: "red_attac_right",

frames: "red_r_attac",

repeat: -1

}

)

//animation for blue

this.anims.create

(

{

key: "blue_idle_left",

frames: "blue_l_idle",

repeat: -1

}

)




this.anims.create
(
    {
    key: "blue_idle_right",
    frames: "blue_r_idle",
    repeat: -1
}

)

this.anims.create

(

{

key: "blue_attac_left",

frames: "blue_l_attac",

repeat: -1

}

)




this.anims.create

(

{

key: "blue_attac_right",

frames: "blue_r_attac",

repeat: -1

}

)

}




update(deltaTime)

{

if(this.player1Sprite.body.touching.down)
{
notground_1 = false;
shot_1= false;
this.player1Sprite.setVelocityX(0);
}
else
{
notground_1 = true;
}

if(this.player2Sprite.body.touching.down)
{
notground_2 = false;
shot_2 = false;
this.player2Sprite.setVelocityX(0);
}
else
{
notground_2 = true;
}

if (cursor.up.isDown && this.player1Sprite.body.touching.down)
{
this.player1Sprite.setVelocityY(-730);
}

if(cursor.right.isDown && notground_1 == true && shot_1 == false)
{
//this.playerSprite.setGravityY(0)
this.player1Sprite.setVelocityX(700)
this.player1Sprite.setVelocityY(700)
this.weapon1Attack();
shot_1 = true;
this.gameover();

}

else if(this.player1Sprite.body.touching.down)

{
    this.player1Sprite.setVelocityX(0)
    //this.player1Sprite.setVelocityY(0)
}

if (cursor.down.isDown &&
this.player2Sprite.body.touching.down)

{

this.player2Sprite.setVelocityY(-730);

}


if(cursor.left.isDown && notground_2 == true && shot_2 == false)

{
//this.playerSprite.setGravityY(0)
this.player2Sprite.setVelocityX(-700)
this.player2Sprite.setVelocityY(700)
this.weapon2Attack();
shot_2 = true;
this.gameover();
}
else if(this.player2Sprite.body.touching.down)
{
    this.player2Sprite.setVelocityX(0)
//this.player2Sprite.setVelocityY(0)
}

} 




weapon1Attack()

{

this.weapon1Sprite = this.physics.add.sprite(this.player1Sprite.x
+ 100, this.player1Sprite.y
+ 100, "red_r_wea")

//this.weapon1.body.enable = true;

//weapon is enabled when dive button is down, and positioned according to player position

this.weapon1Sprite.setVelocityX(this.player1Sprite.body.velocity.x);
//weapon moves at same velocity as the player

this.weapon1Sprite.setVelocityY(this.player1Sprite.body.velocity.y);

this.physics.world.collide(this.weapon1Sprite, this.player2Sprite, this.player2_got_hit, null, this);

if(this.player1Sprite.x >=this.player2Sprite.x)
{
this.weapon1Sprite.x = this.player1Sprite.x
-200;

}

}

weapon2Attack()
{
    this.weapon2Sprite = this.physics.add.sprite(this.player2Sprite.x + 100, this.player2Sprite.y + 100, "blue_l_wea")
    //this.weapon1.body.enable = true;
    //weapon is enabled when dive button is down, and positioned according to player position
    this.weapon2Sprite.setVelocityX(this.player2Sprite.body.velocity.x);
    //weapon moves at same velocity as the player
    this.weapon2Sprite.setVelocityY(this.player2Sprite.body.velocity.y);
    this.physics.world.collide(this.weapon2Sprite, this.player1Sprite, this.player1_got_hit, null, this);
    if(this.player2Sprite.x >= this.player1Sprite.x)
    {
        this.weapon2Sprite.x = this.player2Sprite.x -200;
    } 
}

player2_got_hit(a,b) {

this.player1Sprite.x = 200;
this.player1Sprite.y = 200;
this.player2Sprite.x = 1100; 
this.player2Sprite.y = 200;
score1 += 1;
Round += 1;
RoundText.setText('Round: ' + Round);
scoreText1.setText('scoore1: ' + score1);


}




player1_got_hit(a,b) {
    this.player1Sprite.x = 200;
    this.player1Sprite.y = 200;
    this.player2Sprite.x = 1100;
    this.player2Sprite.y = 200;;
    score2 += 1;
    Round += 1;
     RoundText.setText('Round: ' + Round);
     scoreText2.setText('score2: ' + score2);
    
    
    
    
 

}
gameover(){

    if(score1 > (score2 + 1)){
        
        field1 = this.add.text(640, 400, 'player1 won!', { fontSize: '32px', fill: '#000' });
        Text = this.add.text(640, 300, 'Game over', { fontSize: '32px', fill: '#FF0000' });
    
    }
    if(score2 > (score1 + 1)){
        field2 = this.add.text(640, 400, 'player2 won!!', { fontSize: '32px', fill: '#000' });
        Text = this.add.text(640, 300, 'Game over', { fontSize: '32px', fill: '#FF0000' });
    }
    
}




disbleWeapon1()

{ 

this.weapon1.body.enable =
true; 

}

disbleWeapon2()

{

this.weapon2.body.enable = true;

}

}