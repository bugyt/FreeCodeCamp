/**
 * [sumPrimes]
 * Sum All Primes :
 * Sum all the prime numbers up to and including the provided number.
 * @param  {Integer} num
 * @return {Integer}
 */
function sumPrimes(num) {

  var sum = 0;

  function isPrimeNumber(int) {
    for (var jj = 2; jj < int; jj++) {

      if (int % jj === 0) {
        return false;
      }
    }
    return true;
  }

  for (var ii = 2; ii <= num; ii++) {
    sum += (isPrimeNumber(ii)) ? ii : 0;
  }
  return sum;
}

// Use
sumPrimes(10);