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
        this.menuLoop();
    }

    displayPauseMenu(){

        let resumeButton = document.createElement("div");
        resumeButton.innerHTML = "Resume";
        resumeButton.style.class = "btn btn-primary"; //bootstrap
        resumeButton.onclick = () => this.resumeGame();
        this.menuElements = [resumeButton];
        console.log("pause menu displayed");
        this.menuLoop()
    }

    clean(){
        this.menuElements = [];
        this.menuLoop();

    }

    menuLoop()
    {
            this.renderHtmlElements();
        //if esc is pressed, resume game
        if(Game.instance.inputHandler.getKey("Escape")){
            Game.instance.resume();
        }
    }

    startGame()
    {
        this.clean();
        //start async
        Game.instance.start();
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