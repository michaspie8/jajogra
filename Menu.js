"use strict";

import Game from "./Game.js";

class Menu
{
    menuElements = [];

    constructor()
    {
        this.displayMainMenu();
    }

    displayMainMenu()
    {
        let startbutton = document.createElement("div");
        startbutton.innerHTML = "Start";
        startbutton.setAttribute("class", "btn btn-primary"); //bootstrap
        startbutton.onclick = () => this.startGame();
        // //stop game
        // Game.instance.pause();
        this.menuElements = [startbutton];
        console.log("main menu displayed");
        this.render();
    }

    displayPauseMenu(){
        let resumeButton = document.createElement("div");
        resumeButton.innerHTML = "Resume";
        resumeButton.setAttribute("class",  "btn btn-primary"); //bootstrap
        resumeButton.onclick = () => Game.instance.resume();
        this.menuElements = [resumeButton];
        console.log("pause menu displayed");
        this.render()
    }

    addPauseButton(){
        let pauseButton = document.createElement("div");
        pauseButton.innerHTML = "Pause";
        pauseButton.setAttribute("class",  "btn btn-primary"); //bootstrap
        pauseButton.onclick = () => this.pauseGame();
        this.menuElements.push(pauseButton);
        this.render();
    }

    clean(){
        this.menuElements = [];
        this.render();

    }

    realMenuLoop(){
        if(Game.instance.inputHandler.getKey("Escape")){
            Game.instance.resume();
        }
    }
    render()
    {
            this.renderHtmlElements();
    }

    startGame()
    {
        this.clean();
        //start async
        Game.instance.start();
    }

    pauseGame(){
        this.clean();
        Game.instance.pause();
    }

    renderHtmlElements()
    {
    //    delete old and add new in aside
        let aside = document.getElementById("menu");
        aside.innerHTML = "";
        for (let i = 0; i < this.menuElements.length; i++)
        {
            aside.appendChild(this.menuElements[i]);

        }

    }
}

export default Menu;