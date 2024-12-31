const mainElement = document.querySelector('main');
const canvaElement = document.querySelector('#canva');
let customBackgroundColor = "#ffffff";
let brushColor = "#000000";

createCanvas(canvaElement,16);
function createCanvas(parentElement,sizeCanva) {
    if (typeof sizeCanva !== 'number') {
        throw new TypeError(`The "${sizeCanva}" is not a number (${typeof sizeCanva})`);
    }

    parentElement.querySelectorAll(".grid").forEach((e)=>{e.remove()});

    const height = `${parseInt(parentElement.style.height)/sizeCanva}px`;
    const width = `${parseInt(parentElement.style.width)/sizeCanva}px`;

    for (let i = 0; i < sizeCanva*sizeCanva; i++) {
        const element = document.createElement("div");
        element.classList.add("grid");
        element.style.height = height;
        element.style.width = width;
        element.style.backgroundColor = customBackgroundColor;
        element.addEventListener("mouseenter",()=>{
            element.classList.remove("transition");
            element.style.backgroundColor = brushColor;
        });
        element.addEventListener("mouseleave",()=>{
            element.classList.add("transition");
            element.style.backgroundColor = customBackgroundColor;

        });
        parentElement.appendChild(element);
    }
    
}

const controlsElement = document.querySelector("#controls");

controlsElement.addEventListener("input",(e)=>{
    const id = e.target.id;
    switch (id) {
        case "durationUntil":
            document.documentElement.style.setProperty("--duration", `${e.target.value}s`);
            break;
        
        case "size":
            createCanvas(canvaElement,parseInt(e.target.value));
            break;
        case "backgroundColorControl":
            customBackgroundColor = e.target.value;
            canvaElement.querySelectorAll(".grid").forEach((e)=>{e.style.backgroundColor = customBackgroundColor})
            break;

        case "brushControl":
            brushColor = e.target.value;
            break;
        default:
            break;
    }
})