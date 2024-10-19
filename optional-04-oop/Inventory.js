/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  /**
   * Membuat instance dari class Inventory.
   * Properti `items` akan di inisialisasi sebagai array kosong.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Method untuk menambahkan item ke properti `items`.
   * @param {Item} item - item yang akan ditambahkan
   */
  addItem(item) {
    this.items.push(item);
  }

  /**
   * Method untuk menghapus item berdasarkan `id`.
   * @param {number} id - id item yang akan dihapus
   */
  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  /**
   * Method untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
   * @returns {string} string yang berisi informasi detail barang
   */
  listItems() {
    return this.items
      .map((item) => item.displayDetails())
      .join("\n");
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
