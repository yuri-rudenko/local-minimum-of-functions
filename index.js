import { intervalHalvingFunc } from "./functions/intervalHalving.js"
import { goldenSectionFunc } from "./functions/goldenSection.js"

let golden = document.querySelector('.goldenSection')
let interval = document.querySelector('.intervalHalving')

let results = document.querySelector('.results')
golden.addEventListener("click", () => {
    results.innerHTML = goldenSectionFunc()
})

interval.addEventListener("click", () => {
    results.innerHTML = intervalHalvingFunc()
})