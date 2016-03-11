/**
 * [sumFibs]
 * Sum All Odd Fibonacci Numbers :
 * Return the sum of all odd Fibonacci numbers up to and
 * including the passed number if it is a Fibonacci number.
 * @param  {Integer} num
 * @return {Integer}
 */
function sumFibs(num) {

  function isOdd(n) {
    return Math.abs(n % 2) === 1;
  }

  var sum = 0;
  var fib = [0];
  var ii = 0;

  while (fib[ii] <= num) {

    if (isOdd(fib[ii])) {
      sum += fib[ii];
    }

    // Or fib.push(fib[ii] + ((ii-1 < 0) ? 1 : fib[ii - 1]));
    fib.push(fib[ii] + (isNaN(fib[ii - 1]) ? 1 : fib[ii - 1]));
    ii++;

  }

  return sum;

}

sumFibs(4000000);