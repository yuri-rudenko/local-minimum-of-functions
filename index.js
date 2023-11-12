import { intervalHalvingFunc } from "./functions/intervalHalving.js";
import { goldenSectionFunc } from "./functions/goldenSection.js";
import { linearInterpolationFunc } from "./functions/linearInterpolation.js";

let golden = document.querySelector('.goldenSection');
let interval = document.querySelector('.intervalHalving');
let linear = document.querySelector('.linearInterpolation')

function getValue() {
    let a = parseFloat(document.querySelector('#a').value);
    let b = parseFloat(document.querySelector('#b').value);
    let epsilon = parseFloat(document.querySelector('#epsilon').value);

    if(isNaN(a)) a = 2
    if(isNaN(b)) b = 7
    if(isNaN(epsilon)) epsilon = 0.0001

    if(a>b) {
        let c = a
        a = b
        b = c
    }

    console.log(`a = ${a}, b = ${b}, epsilon = ${epsilon}`)

    return [a, b, epsilon];
}

let results = document.querySelector('.results');
golden.addEventListener("click", () => {
    const [a, b, epsilon] = getValue();
    results.innerHTML = goldenSectionFunc(a, b, epsilon);
});

interval.addEventListener("click", () => {
    const [a, b, epsilon] = getValue();
    results.innerHTML = intervalHalvingFunc(a, b, epsilon);
});

linear.addEventListener("click", () => {
    const [a, b, epsilon] = getValue();
    results.innerHTML = linearInterpolationFunc(a, b, epsilon);
});

