import Phaser from "phaser";
import logo from "../assets/GamerCat.png"
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
        //to preload everything that needs to load before the game runs, such as background and stuffs
    }

    create()
    {
        this.logoSprite = this.add.sprite(400, 300, "logo");
        //
    }

    update()
    {
        //60fps
        this.logoSprite.x++;
    }

}