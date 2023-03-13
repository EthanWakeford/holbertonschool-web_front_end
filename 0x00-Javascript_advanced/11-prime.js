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

function execute() {
  for (let i = 0; i <= 99; i++) {
    setTimeout(countPrimeNumbers());
  }
}

timeoutId = setTimeout(execute(), 1000);
const t1 = performance.now();
clearTimeout(timeoutId);
const t2 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t2 - t1} milliseconds.`);
