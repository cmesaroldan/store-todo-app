import html from './app.html?raw';
/**
 * 
 * @param {String} elemento 
 */

export const App = (elementId) => {
    

    //Cuando la función app se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );

    })();

}