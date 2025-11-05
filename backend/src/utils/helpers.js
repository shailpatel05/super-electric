module.exports = {
  generateUniqueId: () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  },

  formatDate: (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  },

  calculateStockValue: (items) => {
    return items.reduce((total, item) => total + (item.price * item.stock), 0);
  },

  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
};