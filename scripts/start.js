const mainElement = document.querySelector('main');
const canvaElement = document.querySelector('#canva');
createCanvas(mainElement,16);

function createCanvas(parentElement,sizeCanva) {
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
        element.addEventListener("mouseenter",()=>{
            element.classList.remove("transition");
            element.style.backgroundColor = "black";
        });
        element.addEventListener("mouseleave",()=>{
            element.classList.add("transition");
            element.style.backgroundColor = "red";

        });
        newTable.appendChild(element);
    }
    
    parentElement.appendChild(newTable);
}