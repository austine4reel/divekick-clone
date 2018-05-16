import Phaser from "phaser";
import logo from "../assets/GamerCat.png"
import left_player from "../assets/left_player.png"
import right_player from "../assets/right_player.png"
//this is a feature from parcel

export default class GameScene extends Phaser.Scene
{
    constructor()
    {
        super({key: "GameScence"});
    }

    preload()
    {
        this.load.image("logo", logo)
        this.load.image("left_player", left_player)
        this.load.image("right_player", right_player)
        //to preload everything that needs to load before the game runs, such as background and stuffs
    }

    //screensize is 1024, 768, middle point is 512, 384
    create()
    {
        this.logoSprite = this.add.sprite(400, 300, "logo");
        this.first_player = this.add.sprite(512, 384, "left_player")
        this.second
        //
    }

    update()
    {
        //60fps
        this.logoSprite.x++;
    }

}