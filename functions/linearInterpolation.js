import { f, fDerivative } from "./f.js";
import { setTime } from "./setTime.js";

export function linearInterpolationFunc(a, b, epsilon) {
  
    function linearInterpolation(a, b, epsilon) {
      let x0 = a;
      let x1 = b;
      let x2;


      do {
        x2 = x1 - fDerivative(x1) * (x1 - x0) / (fDerivative(x1) - fDerivative(x0));
        x0 = x1;
        x1 = x2;
      } while (Math.abs(fDerivative(x2)) > epsilon);
  
      return x2;
    }
  
    const totalTimeStart = performance.now();


    let minPoint
    for(let i = 0; i< 500000; i++) minPoint = linearInterpolation(a, b, epsilon);
    const minValue = f(minPoint);
  
    console.log(`Локальний мінімум функції знаходиться в точці x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);
  
    const totalTime = performance.now() - totalTimeStart;
    console.log(`Загальний час виконання: ${totalTime} мс`);
    setTime(totalTime.toFixed(10) + ' мс');


    return (`x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);
}
