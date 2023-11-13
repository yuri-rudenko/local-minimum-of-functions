import { f } from "./f.js";
import { setTime } from "./setTime.js";

export function intervalHalvingFunc(a, b, epsilon) {

  function dichotomy(a, b, epsilon) {
    const delta = epsilon / 2;

    while (Math.abs(b - a) > epsilon) {
      const x1 = (a + b - delta) / 2;
      const x2 = (a + b + delta) / 2;

      if (f(x1) < f(x2)) {
        b = x2;
      } else {
        a = x1;
      }
    }

    return (a + b) / 2;
  }

  const totalTimeStart = performance.now();

  let minPoint

  for(let i = 0; i< 500000; i++) minPoint = dichotomy(a, b, epsilon);
  const minValue = f(minPoint);

  console.log(`Мінімум функції знаходиться в точці x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);

  const totalTime = performance.now() - totalTimeStart;
  console.log(`Загальний час виконання: ${totalTime} мс`);
  setTime(totalTime.toFixed(10) + ' мс');

  return (`x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);

}

