"use strict";
//Renderer component
import Component from "./Component.js";

class Renderer extends Component{
    color = "#000000";
    fill = true;
    constructor(gameObject, color, fill){
        super(gameObject);
        this.color = color;
        this.fill = fill;
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.gameObject.transform.position.x, this.gameObject.transform.position.y);
        ctx.rotate(this.gameObject.transform.rotation);
        ctx.scale(this.gameObject.transform.scale.x, this.gameObject.transform.scale.y);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        if(this.fill){
            ctx.fillRect(-this.gameObject.transform.width / 2, -this.gameObject.transform.height / 2, this.gameObject.transform.width, this.gameObject.transform.height);
        }else{
            ctx.strokeRect(-this.gameObject.transform.width / 2, -this.gameObject.transform.height / 2, this.gameObject.transform.width, this.gameObject.transform.height);
        }
        ctx.restore();
    }
}

export default Renderer;