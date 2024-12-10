const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

function Originalfactorial(n) {
    if (n === 0) return 1;
    else return n * Originalfactorial(n - 1);
}

function Originale(n) {
    if (n === 0) return 1;
    else return 1.0 / Originalfactorial(n) + Originale(n - 1);
}


assert(Originalfactorial(10) === 3628800);


assert(e(10) === Originale(10), "Mismatch for e(10)");
assert(e(1) === Originale(1), "Mismatch for e(1)");
assert(e(0) === Originale(0), "Mismatch for e(0)");


const testCases = [0, 1, 2, 5, 10, 20, 50, 100, 150, 200, 1000, 2000];
testCases.forEach((n) => {
    const originalResult = Originale(n);
    const optimizedResult = e(n);
    console.log(`n = ${n}:`, originalResult === optimizedResult ? "PASS" : "FAIL");
    assert(originalResult === optimizedResult, `Test failed for n = ${n}`);
});