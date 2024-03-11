"use strict";
import Transform from "./Transform.js";
import Game from "./Game.js";

//Game object class
class GameObject
{
    enabled = true;
    components = [];

    constructor(x, y, width, height)
    {
        this.transform = new Transform(this, x, y, width, height);
        Game.instance.gameObjects.push(this);
    }

    update()
    {
        if (this.enabled)
        {
            for (let i = 0; i < this.components.length; i++)
            {
                if (this.components[i].enabled)
                {
                    this.components[i].update();
                }
            }
        }
    }

    render()
    {
        if (this.enabled)
        {
            for (let i = 0; i < this.components.length; i++)
            {
                if (this.components[i].enabled)
                {
                    this.components[i].render();
                }
            }
        }
    }

    clean()
    {
        for (let i = 0; i < this.components.length; i++)
        {
            this.components[i].clean();
        }
        delete Game.instance.gameObjects.splice(Game.instance.gameObjects.indexOf(this), 1);
    }


}

export default GameObject;