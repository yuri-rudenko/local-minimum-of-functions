import { f, fDerivative } from "./f.js";

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
  
    const minPoint = linearInterpolation(a, b, epsilon);
    const minValue = f(minPoint);
  
    console.log(`Локальний мінімум функції знаходиться в точці x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);
  
    return (`x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);
  }
  