"use strict";
//basketball component
import Component from "./Component.js";
import Game from "./Game.js";
import Vector2 from "./vector.js";

class Basket extends Component
{
    speed = 1;

    constructor(gameObject, speed)
    {
        super(gameObject);
        this.speed = speed;
        Game.instance.basket = this.gameObject;
    }

    update()
    {
        if (Game.instance.inputHandler.getKey("ArrowLeft"))
        {
            this.gameObject.transform.position.x -= this.speed;
        }
        if (Game.instance.inputHandler.getKey("ArrowRight"))
        {
            this.gameObject.transform.position.x += this.speed;
        }
        if (this.gameObject.transform.position.x - this.gameObject.transform.width / 2 <= 0)
        {
            this.gameObject.transform.position.x = this.gameObject.transform.width / 2;
        }
        if (this.gameObject.transform.position.x + this.gameObject.transform.width / 2 >= Game.instance.canvas.width)
        {
            this.gameObject.transform.position.x = Game.instance.canvas.width - this.gameObject.transform.width / 2;
        }
    }
}

export default Basket;