/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
  /**
   * Membuat objek Item dengan properti id, name, quantity, dan price.
   * @param {number} id - id dari item
   * @param {string} name - nama dari item
   * @param {number} quantity - jumlah dari item
   * @param {number} price - harga dari item
   */
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  /**
   * Mengubah nilai properti `name`, `quantity`, dan `price` dengan nilai yang diberikan.
   * @param {string} name - nama yang akan diubah
   * @param {number} quantity - jumlah yang akan diubah
   * @param {number} price - harga yang akan diubah
   */
  updateDetails(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  /**
   * Mengembalikan informasi detail dari Item dalam format string.
   * @returns {string} String yang berisi informasi detail item: ID, nama, jumlah, dan harga.
   */
  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
}

// Jangan hapus kode di bawah ini!
export default Item;
