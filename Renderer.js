"use strict";
//Renderer component
import Component from "./Component.js";
import Game from "./Game.js";

class Renderer extends Component
{
    texture = null;


    constructor(gameObject, texture, isPath = true)
    {
        super(gameObject);

        if (isPath)
        {
            this.texture = new Image();
            this.texture.loaded = false;
            this.texture.onload = function ()
                {
                    this.loaded = true;
                };
            this.texture.src = texture;
            console.log(this.texture);
        } else
            this.texture = texture;
    }

    render()
    {
        if (this.enabled && this.texture.loaded)
        {
            let ctx = Game.instance.context;
            let transform = this.gameObject.transform;
            ctx.save();
            ctx.translate(transform.position.x, transform.position.y);
            ctx.rotate(transform.rotation);
            ctx.scale(transform.scale.x, transform.scale.y);
            ctx.drawImage(this.texture, -transform.width / 2, -transform.height / 2, transform.width, transform.height);
            ctx.restore();
        }
    }
}

export default Renderer;