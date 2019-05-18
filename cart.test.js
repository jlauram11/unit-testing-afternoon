const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', () => {
    test('Cart should default to be an empty array', () => {
        expect(Array.isArray(cart.cart)).toBe(true);
        expect(cart.cart.length).toBe(0);
    });

    test('Total should degault to 0', () => {
        expect(cart.total).toBe(0);
    });
})

describe('Cart Methods:', () => {
    afterEach(() => {
        cart.cart = [];
        cart.total = 0;
    });

    test('addToCart() should add a car object to the cart array', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );

        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
        expect(cart.cart.length).toBe(2);
    });

    test('addToCart() should increase the cart total', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[6] );
        cart.addToCart( cars[4] );

        expect(cart.total).toEqual(cars[0].price + cars[6].price + cars[4].price);
    });

    test('removeFromCart() should remove a car object from the cart array', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[1] );
        cart.addToCart( cars[2] );

        cart.removeFromCart(1, cars[1].price);

        expect(cart.cart.length).toBe(2);
        expect(cart.cart[0]).toBe(cars[0]);
        expect(cart.cart[1]).toBe(cars[2]);
    });

    test('removeFromCart() should decrease the cart total by the price of the removed car', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[6] );
        cart.addToCart( cars[4] );

        cart.removeFromCart(6, cars[6].price);

        expect(cart.total).toBe(cars[0].price + cars[4].price);
    });

    test('checkout() should empty the cart array and return the cart total to 0', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[6] );
        cart.addToCart( cars[4] );

        cart.checkout();
        
        expect(cart.total).toBe(0);
        expect(Array.isArray(cart.cart)).toBe(true);
    })
})