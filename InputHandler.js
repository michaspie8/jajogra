"use strict";

class InputHandler {
    // Add the constructor here
    constructor() {
        this.keys = [];
        this.mouse = { x: 0, y: 0, down: false };
        this.bindKeys();
        this.bindMouse();
    }

    // Add the bindKeys method here
    bindKeys() {
        window.addEventListener("keydown", (event) => {
            this.keys[event.key] = true;
        });
        window.addEventListener("keyup", (event) => {
            this.keys[event.key] = false;
        });
    }

    // Add the bindMouse method here
    bindMouse() {
        window.addEventListener("mousemove", (event) => {
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY;
        });
        window.addEventListener("mousedown", (event) => {
            this.mouse.down = true;
        });
        window.addEventListener("mouseup", (event) => {
            this.mouse.down = false;
        });
    }
}

export default InputHandler;