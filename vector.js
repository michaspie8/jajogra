"use strict";

class Vector2
{
    x = 0;
    y = 0;

    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    static add(vector1, vector2)
    {
        return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    static subtract(vector1, vector2)
    {
        return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y);
    }

    static multiply(vector, scalar)
    {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    }

    static divide(vector, scalar)
    {
        return new Vector2(vector.x / scalar, vector.y / scalar);
    }

    normalize()
    {
        let magnitude = this.magnitude();
        this.x /= magnitude;
        this.y /= magnitude;
    }

    magnitude()
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    add(vector)
    {
        this.x += vector.x;
        this.y += vector.y;
    }

    subtract(vector)
    {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    multiply(scalar)
    {
        this.x *= scalar;
        this.y *= scalar;
    }

    divide(scalar)
    {
        this.x /= scalar;
        this.y /= scalar;
    }

    sqrMagnitude()
    {
        return this.x * this.x + this.y * this.y;
    }
}

export default Vector2;