/**
 * Mengembalikan deret Fibonacci hingga elemen ke-n.
 *
 * @param {number} n
 * @return {number[]}
 */
function fibonacci(n) {
  if (n < 0) return [];
  if (n === 0) return [0];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibo = fibonacci(n - 1);
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  return fibo;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
