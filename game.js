"use strict";
// Import
import GameObject from "./GameObject.js";
import Renderer from "./Renderer.js";
import InputHandler from "./InputHandler.js";




class Game {
    static instance;
    static player;
    gameObjects = [];
    constructor() {
        if (this.instance === undefined) {
        this.instance = this;
        }else{
            return this.instance;
        }
        this.canvas = document.getElementById("gameCanvas");
        this.context = this.canvas.getContext("2d");
        this.config = { width: 800, height: 600, fps: 60 };
        this.canvas.width = this.config.width;
        this.canvas.height = this.config.height;
        this.deltaTime = 0;
        this.lastTime = 0;
        this.inputHandler = new InputHandler();
    }
    update() {
        // Update game logic
        if(this.inputHandler.keys.includes("a")){
            Game.player.transform.x -= 10;
        }
    }
    render() {
        // Render game
        this.context.clearRect(0, 0, this.config.width, this.config.height);
        //draw background
        this.context.fillStyle = "#4020FF";
        this.context.fillRect(0, 0, this.config.width, this.config.height);
        //draw game objects
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].render();
        }

    }
    gameLoop(time) {
        this.deltaTime = (time - this.lastTime) / 1000;
        this.lastTime = time;
        this.update();
        this.render();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    start() {
        if(this.inputHandler.keys.includes("ArrowUp")){
            console.log("up");
        }
        Game.player = new GameObject(100, 100, 50, 50);
        Game.player.addComponent(new Renderer(Game.player, "#FF0000", true));


        requestAnimationFrame(this.gameLoop.bind(this));
    }
}

class Vector2
{
    constructor(number, number2)
    {

    }

}
