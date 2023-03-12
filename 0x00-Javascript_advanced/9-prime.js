function countPrimeNumbers() {
  let count = 0;
  let flag = false;

  for (let i = 2; i <= 100; i++) {
    flag = false;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      count++;
    }
  }

  return count;
}

const t1 = performance.now();
countPrimeNumbers();
const t2 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t2 - t1} milliseconds.`);
