import { f } from "./f.js";

export function goldenSectionFunc(a, b, epsilon) {
    
  function goldenSection(a, b, epsilon) {
      const phi = (1 + Math.sqrt(5)) / 2; // Золотий перетин
    
      let x1 = b - (b - a) / phi;
      let x2 = a + (b - a) / phi;
    
      while (Math.abs(b - a) > epsilon) {
        if (f(x1) < f(x2)) {
          b = x2;
        } else {
          a = x1;
        }
    
        x1 = b - (b - a) / phi;
        x2 = a + (b - a) / phi;
      }
    
      return (a + b) / 2;
    }
    
    const minPoint = goldenSection(a, b, epsilon);
    const minValue = f(minPoint);
    
    console.log(`Мінімум функції знаходиться в точці x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);
    
    return(`x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`)
}