const solution = (a, n) => a.map((v, i) => (a.length % 2 ^ i % 2 ? v + n : v));
