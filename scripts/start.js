const mainElement = document.querySelector('main');
const canvaElement = document.querySelector('#canva');
createCanvas(mainElement,16);

// for (let i = 0; i < 16*16; i++) {
//     const element = document.createElement("div");
//     element.classList.add("grid");
//     mainElement.appendChild(element);
// }

function createCanvas(parentElement,sizeCanva) {
    // if (parentElement instanceof HTMLDivElement) {
    //     throw new TypeError(`The parentElement should be HTMLElement (${parentElement.prototype})`);   
    // }
    if (typeof sizeCanva !== 'number') {
        throw new TypeError(`The "${sizeCanva}" is not a number (${typeof sizeCanva})`);
    }

    const rect = parentElement.getBoundingClientRect();
    const size = Math.min(rect.width,rect.height)+'px';
    const newTable = document.createElement("div");
    newTable.classList.add("table");
    newTable.style.height = size;
    newTable.style.width = size;

    for (let i = 0; i < sizeCanva*sizeCanva; i++) {
        const element = document.createElement("div");
        element.classList.add("grid");
        newTable.appendChild(element);
    }
    
    parentElement.appendChild(newTable);
}