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
setTimeout(() => {
  for (let i = 0; i <= 99; i++) {
    countPrimeNumbers();
  }
}, 0);
const t2 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t2 - t1} milliseconds.`);
