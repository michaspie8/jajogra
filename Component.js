"use strict";

//component class, like in asteroids

class Component
{
    enabled = true;
    gameObject = null;

    constructor(gameObject)
    {
        this.gameObject = gameObject;
        gameObject.components.push(this);
    }

    update()
    {

    }

    render()
    {

    }

    clean()
    {

    }
}

export default Component;