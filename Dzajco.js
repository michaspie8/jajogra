"use strict";
import Vector2 from "./vector.js";
import Component from "./Component.js";
import Game from "./Game.js";
import ExtensionMethods from "./ExtensionMethods.js";

//falling egg component
class Dzajco extends Component
{
    speed = 1;

    constructor(gameObject, speed)
    {
        super(gameObject);
        this.speed = speed;
    }

    update()
    {
        //check if touches the ground
        if (this.gameObject.transform.position.y + this.gameObject.transform.height / 2 >= Game.instance.height)
        {
            this.gameObject.destroy();
        }
        //check if touches the basket
        if (this.gameObject.transform.position.x + this.gameObject.transform.width / 2 >= Game.instance.basket.transform.position.x - Game.instance.basket.transform.width / 2 &&
            this.gameObject.transform.position.x - this.gameObject.transform.width / 2 <= Game.instance.basket.transform.position.x + Game.instance.basket.transform.width / 2 &&
            this.gameObject.transform.position.y + this.gameObject.transform.height / 2 >= Game.instance.basket.transform.position.y - Game.instance.basket.transform.height / 2 &&
            this.gameObject.transform.position.y - this.gameObject.transform.height / 2 <= Game.instance.basket.transform.position.y + Game.instance.basket.transform.height / 2)
        {
            Game.instance.score++;
            let audio = new Audio("egg.wav");
            audio.play();
            this.gameObject.clean();
        }
        this.gameObject.transform.position.y += this.speed;

    }
}

export default Dzajco;