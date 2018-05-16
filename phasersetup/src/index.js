import Phaser from "phaser";
import GameScene from "./scenes/gamescene";

const  config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [GameScene]
};

const theGame = new Phaser.Game(config);

console.log("Hello World");