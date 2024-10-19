// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// DONE: buatlah variabel yang menampung data orders
let orders = [];

/**
 * Menambahkan order baru ke dalam daftar orders.
 *
 * @param {string} customerName - Nama customer yang memesan.
 * @param {Array} items - Daftar item yang dipesan. Masing-masing item berisi properti `name` (string) dan `price` (number).
 *
 * @returns {Object} Order yang baru dibuat.
 */
function addOrder(customerName, items) {
  const id = generateUniqueId();
  const order = {
    id,
    customerName,
    items,
    totalPrice: items.reduce((total, item) => total + item.price, 0),
    status: "Menunggu",
  };
  orders.push(order);
}

/**
 * Mengubah status dari order yang bersangkutan.
 *
 * @param {string} orderId - id dari order yang akan diubah statusnya.
 * @param {string} status - Status yang akan diubah.
 *
 * @returns {Object} Order yang bersangkutan.
 */
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  order.status = status;
  return order;
}

/**
 * Menghitung total pendapatan dari semua order yang statusnya "Selesai".
 *
 * @returns {number} Total pendapatan.
 */
function calculateTotalRevenue() {
  let total = 0;
  orders.forEach((order) => {
    if (order.status === "Selesai") {
      total += order.totalPrice;
    }
  });
  return total;
}

/**
 * Menghapus order yang bersangkutan berdasarkan id.
 *
 * @param {string} id - id dari order yang akan dihapus.
 *
 * @returns {Array} Daftar orders yang tersisa.
 */
function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id);
  orders.splice(index, 1);
  return orders;
}

export {
  addOrder,
  calculateTotalRevenue,
  deleteOrder,
  orders,
  updateOrderStatus,
};
