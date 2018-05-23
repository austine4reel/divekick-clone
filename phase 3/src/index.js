import Phaser from "phaser";
import GameScene from "./scenes/gamescene";

const  config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 768,
    scene: [GameScene ],
    physics: {
        default: 'arcade',
        
        }      
    
};

const theGame = new Phaser.Game(config);

console.log("Hello World"); 