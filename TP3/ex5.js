
function isPrime(n) {
      if (n < 2) {
        return false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
}
    
    for (let i = 0; i <= 1000; i++) {
      if (isPrime(i)) {
        document.write(i + "<br>");
      }}