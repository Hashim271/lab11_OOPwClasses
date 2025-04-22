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

    static appplyDiscount(products, discount) { // Static applyDiscount
        products.forEach(product => {
            product.price = product.price * (1 - discount); // Reduce by discount percentage
        });
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

// Two instances of this class with sample data
const milk = new PerishableProductsProperties("Milk", 8.99, 2, "2025-04-22");
const yogurt = new PerishableProductsProperties("Yogurt", 5.99, 8, "2025-04-28");

console.log(milk.toString());
console.log(yogurt.toString());