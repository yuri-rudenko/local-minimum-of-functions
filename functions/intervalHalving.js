export function intervalHalvingFunc() {

  function f(x) {
    return 1.3 * Math.pow(x, 2) - 10.4 * x + 13.55;
  }

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

  const a = 2; // Початковий інтервал
  const b = 7; // Кінцевий інтервал
  const epsilon = 0.001; // Точність

  const minPoint = dichotomy(a, b, epsilon);
  const minValue = f(minPoint);

  console.log(`Мінімум функції знаходиться в точці x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);

  return (`x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);

}

