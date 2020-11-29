const MAX = 20000;

export function sieve() {
  const initialArray = [];
  const finalArray = [];

  for (let i = 0; i <= MAX; i++) {
    initialArray.push(true);
  }

  for (let i = 2; i <= MAX; i++) {
    if (initialArray[i]) {
      for (let j = i * i; j < MAX; j += i) {
        initialArray[j] = false;
      }
    }
  }

  for (let i = 2; i < MAX; i++) {
    if (initialArray[i]) finalArray.push(i);
  }

  return finalArray;
}
