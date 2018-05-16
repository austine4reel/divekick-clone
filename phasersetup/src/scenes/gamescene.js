import Phaser from "phaser";
import logo from "../assets/GamerCat.png"
<<<<<<< HEAD
import left_player from "../assets/left_player.png"
import right_player from "../assets/right_player.png"
//this is a feature from parcel
=======
import ground from "../assets/ground.png"
import player from "../assets/left_Player.png"

>>>>>>> 595c878b63a6ed066ff6b9c32b7bb3db6356a48e

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
<<<<<<< HEAD
        this.load.image("left_player", left_player)
        this.load.image("right_player", right_player)
        //to preload everything that needs to load before the game runs, such as background and stuffs
    }

    //screensize is 1024, 768, middle point is 512, 384
=======
        this.load.image("ground", ground)
        //to preload everything that needs to load before the game runs, such as background and stuffs
    }

    //width: 1024,height: 768,
>>>>>>> 595c878b63a6ed066ff6b9c32b7bb3db6356a48e
    create()
    {
        this.player = this.add.image(100, 450, 'player');

        

        this.add.image(512, 768, 'ground');

        this.logoSprite = this.add.sprite(400, 300, "logo");
<<<<<<< HEAD
        this.first_player = this.add.sprite(512, 384, "left_player")
        this.second
=======

        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
>>>>>>> 595c878b63a6ed066ff6b9c32b7bb3db6356a48e
        //
    }

    update()
    {
        //60fps
        this.logoSprite.x++;
    }

}