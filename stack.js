/**
 * Created by Vidit Jindal on 1/11/20.
 */

export { Stack }

class Stack{
    constructor(){
        this.size = 0;
        this.buffer = 4;
        this.stack = [];
    }
clear(){
        this.size = 0;
        this.stack = [];
    }
    isEmpty(){
        return  ( this.size === 0 );
    }
     top(){
        return this.stack[this.size-1];
    }

