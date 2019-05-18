const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) { 
    this.cart.push(car);
    this.total = this.total + car.price;
  },

  removeFromCart: function(i, price) {
    this.total = this.total - price;
    this.cart.splice(i, 1);
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};