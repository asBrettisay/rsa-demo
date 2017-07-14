const p = 991, q = 997;

const n = p*q;

function GCD(a, b) {
  while(true) {
    if (a === 0) return b;
    if (b === 0) return a;

    let  _b = a % b;
    a = b;
    b = _b;
  }
}

function LCM(a, b) {
  
}

function carmichaels(num) {


  function isCoprime(a, b) {
    return GCD(a, b) === 1;
  }

  function fetchCoprimes(num) {
    let ans = [];
    for (let i = 2; i < num; i++) {
      if (isCoprime(i, num)) {
        ans.push(i);
      }
    }
    return ans;
  }

  const coprimes = fetchCoprimes(num);
  for (let m = 1; m < num; m++) {
    for (let i = 0; i < coprimes.length; i++) {
      if (Math.pow(coprimes[i], m) % num !== 1) {
        break;
      }

      return m;
    }
  }

  return -1;
}

let lambdaN = carmichaels(n);

