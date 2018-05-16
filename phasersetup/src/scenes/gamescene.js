import Phaser from "phaser";
import logo from "../assets/GamerCat.png"
import ground from "../assets/ground.png"
import player from "../assets/left_Player.png"


//this is a feature from parcel
var platforms;
export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super({key: "GameScence"});
    }
    

    preload()
    {
        this.load.image("player", player)
        this.load.image("logo", logo)
        this.load.image("ground", ground)
        //to preload everything that needs to load before the game runs, such as background and stuffs
    }

    //width: 1024,height: 768,
    create()
    {
        this.player = this.add.image(100, 450, 'player');

        

        this.add.image(512, 768, 'ground');

        this.logoSprite = this.add.sprite(400, 300, "logo");

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        //
    }

    update()
    {
        //60fps
        this.logoSprite.x++;
    }

}