"use strict";

class ExtensionMethods
{
    //smooth damp function
    static smoothDamp(current, target, speed, deltaTime)
    {
        let result = 0;
        if (current < target)
        {
            result = Math.min(current + speed * deltaTime, target);
        } else
        {
            result = Math.max(current - speed * deltaTime, target);
        }
        return result;
    }
}

export default ExtensionMethods;