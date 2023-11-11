export function f(x) {
    return 1.3 * Math.pow(x, 2) - 10.4 * x + 13.55;
  }
  
  // Метод поділу відрізка навпіл для мінімізації функції
export function intervalHalving(a, b, epsilon) {
    while ((b - a) > epsilon) {
      const x1 = (a + b - epsilon) / 2;
      const x2 = (a + b + epsilon) / 2;
  
      if (f(x1) < f(x2)) {
        b = x2;
      } else {
        a = x1;
      }
    }
  
    return (a + b) / 2;
  }
  
  // Виклик функції для мінімізації
  const a = 0; // Початковий інтервал
  const b = 5; // Кінцевий інтервал
  const epsilon = 0.001; // Точність
  
  const minPoint = intervalHalving(a, b, epsilon);
  const minValue = f(minPoint);
  
  console.log(`Мінімум функції знаходиться в точці x = ${minPoint.toFixed(4)}, y = ${minValue.toFixed(4)}`);
  