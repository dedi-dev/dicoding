// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
/**
 *
 * @param {string} customerName
 * @param {object[]} items
 */
function addOrder(customerName, items) {
  const totalPrice = items
    ? items.reduce((sum, item) => sum + item.price, 0)
    : 0;
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu',
  };
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
/**
 *
 * @param {string} orderId
 * @param {status} status
 */
function updateOrderStatus(orderId, status) {
  for (const order of orders) {
    if (order.id === orderId) {
      order.status = status;
      break;
    }
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((sum, order) => {
    if (order.status === 'Selesai') {
      return (sum += order.totalPrice);
    }
    return (sum += 0);
  }, 0);
}

// TODO: selesaikan fungsi deleteOrder
/**
 *
 * @param {string} id
 */
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
