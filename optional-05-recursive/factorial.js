/**
 * Menghitung nilai faktorial dari n.
 * @param {number} n - Nilai yang akan dihitung faktorialnya.
 * @returns {number} Nilai faktorial dari n.
 */
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
