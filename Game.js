"use strict";
// Import
import GameObject from "./GameObject.js";
import Renderer from "./Renderer.js";
import InputHandler from "./InputHandler.js";
import Dzajco from "./Dzajco.js";
import Basket from "./Basket.js";
import Menu from "./Menu.js";
import BeatBeat from "./beat-beat.js";

class Game
{
    static instance;
    gameObjects = [];
    eggSpawnTime = 0;
    eggSpawnInterval = 0;
    eggImages = ["eg.png"];
    basketImage = "zajc.png";


    constructor()
    {
        if (Game.instance === undefined)
        {
            Game.instance = this;
            console.log("Game created");
        } else
        {
            return Game.instance;
        }
        console.log(Game.instance);
        this.musicctx = new AudioContext();
        this.canvas = document.getElementById("gameCanvas");
        this.context = this.canvas.getContext("2d");
        this.config = {width: 800, height: 600, fps: 60};
        this.canvas.width = this.config.width;
        this.canvas.height = this.config.height;
        this.deltaTime = 0;
        this.lastTime = 0;
        this.score = 0;
        this.lastEggPos = this.config.width / 2;
        this.inputHandler = new InputHandler();
        this.menu = new Menu();
        this.stopped = true;
    }

    pause()
    {
        this.musicctx.suspend();
        console.log("Game stopped");
        cancelAnimationFrame(this.gameLoop);
        this.menu.displayPauseMenu();
        this.stopped = true;
        this.render();
        requestAnimationFrame(this.menu.realMenuLoop.bind(this));
    }

    resume(){
        this.musicctx.resume();
        console.log("Game resumed");
        cancelAnimationFrame(this.menu.realMenuLoop);
        this.menu.clean();
        requestAnimationFrame(this.gameLoop.bind(this));
        this.menu.addPauseButton();
        this.stopped = false;
    }

    update()
    {
        // Update game logic
        for (let i = 0; i < this.gameObjects.length; i++)
        {
            this.gameObjects[i].update();
        }
        //spawn eggs
        /*this.eggSpawnTime += this.deltaTime;
        if (this.eggSpawnTime >= this.eggSpawnInterval)
        {
            this.eggSpawnTime = 0;
            this.eggSpawnInterval = Math.random() * 2;
            let egg = new GameObject(Math.random() * this.config.width, 0, 16, 16);
            new Renderer(egg, this.eggImages[Math.floor(Math.random() * this.eggImages.length)], true);
            new Dzajco(egg,5);
        }*/
        //spawn eggs in lines like in osu, with rythm of music


        document.getElementById("score").innerHTML = "Score: " + this.score;

        //if esc is pressed, pause game
        if(this.inputHandler.keys.includes("Escape")){
            this.pause();
        }



        // Check if it's time to spawn an egg
        if (this.music.currentTime >= this.nextBeatTime)
        {
            this.spawnEgg();
            this.nextBeatTime = this.getBeatTime(); // Assume this function returns the time for the next beat
        }

        // If esc is pressed, pause game
        if(this.inputHandler.keys.includes("Escape")){
            this.pause();
        }
    }

    spawnEgg()
    {
        // Calculate the new egg's x position
        let minX = Math.max(0, this.lastEggPos - this.config.width / 2);
        let maxX = Math.min(this.config.width, this.lastEggPos + this.config.width / 2);
        let x = Math.random() * (maxX - minX) + minX;

        // Create the new egg
        let egg = new GameObject(x, 0, 16, 16);
        new Renderer(egg, this.eggImages[Math.floor(Math.random() * this.eggImages.length)], true);
        this.lastEggPos = egg.transform.position.x;
        new Dzajco(egg,5);
        console.log("Egg spawned");
    }

    render()
    {
        // Render game
        this.context.clearRect(0, 0, this.config.width, this.config.height);
        //draw background
        this.context.fillStyle = "#4020FF";
        this.context.fillRect(0, 0, this.config.width, this.config.height);
        //draw game objects
        for (let i = 0; i < this.gameObjects.length; i++)
        {
            this.gameObjects[i].render();
        }

    }

    gameLoop(time)
    {
        if(this.stopped) return;
        this.deltaTime = (time - this.lastTime) / 1000;
        this.lastTime = time;
        this.update();
        this.render();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    async start()
    {
        switch(this.level){
            case 1:
                this.music = new BeatBeat(this.musicctx,"alw.mp3",100,20,0.5,150);
                break;
            case 2:
                this.music = new BeatBeat(this.musicctx,"Cunk.mp3",100,20,0.5,150);
                break;
            case 3:
                this.music = new BeatBeat(this.musicctx,"notb.flac",100,20,0.5,150);
                break;
            default:
                location.replace("index.html?level=0")
        }
        this.stopped = false;
        this.canvas.parentElement.style.backgroundImage = 'url("load.gif")'
        document.getElementById("score").innerHTML = "loading...";
        await this.music.load();
        console.log("Game started");
        this.menu.addPauseButton();
        this.basket = new GameObject(this.config.width / 2, this.config.height - 64 * 1.5, 64, 64);
        new Renderer(this.basket, this.basketImage, true);
        new Basket(this.basket, 7);

        this.music.play(() => {
            if(this.stopped){
                return;
            }
            this.spawnEgg();
        });
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    stop()
    {
        this.pause();
        delete Game.instance;
        return undefined;
    }
}


export default Game;