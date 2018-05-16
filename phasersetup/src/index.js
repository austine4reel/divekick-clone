import Phaser from "phaser";
import GameScene from "./scenes/gamescene";

const  config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: [GameScene]
};

const theGame = new Phaser.Game(config);

console.log("Hello World");