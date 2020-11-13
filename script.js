import { Stack } from './stack.js';

document.onkeydown = function(event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
    }
};
