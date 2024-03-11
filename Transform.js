"use strict";
import Vector2 from "./vector.js";
import Component from "./Component.js";

//transform component
class Transform extends Component
{
    position = new Vector2(0, 0);
    rotation = 0;
    scale = new Vector2(1, 1);
    width = 0;
    height = 0;

    constructor(gameObject, x, y, width, height)
    {
        super(gameObject);
        this.position.x = x;
        this.position.y = y;
        this.width = width;
        this.height = height;
    }
}

export default Transform;