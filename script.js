class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name; // Name of Product (string)
        this.price = price; // Price of Product (num)
        this.quantity = quantity; // Stock Quantity (num)
    }

    getTotalValue() { // Get total value of product in stock
        return this.price * this.quantity;
    }

    toString() { // toString to return a string representation of product
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }

}

class PerishableProductsProperties extends ProductProperties {
    constructor(name, price, quantity, expDate) { // Constructor
        super(name, price, quantity); // Call parent constructor
        this.expDate = expDate; // New Property
    }

    toString() { // toString updated with EXP Date
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expDate}`;
    }

}