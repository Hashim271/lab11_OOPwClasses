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
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) { // Static applyDiscount
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
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Expiration Date: ${this.expDate}`;
    }

}

class Store {
    constructor() { // Constructor
        this.inventory = [];
    }

    addProduct(product) { // addProduct()
        this.inventory.push(product);
    }

    getInventoryValue() { // getInventoryValue()
        let total = 0;
        for (const product of this.inventory) {
            total += product.getTotalValue(); // Total added
        }
        return total;
    }

    findProductByName(name) { // findProducByName
        for (const product of this.inventory) {
            if (product.name.toLowerCase() === name.toLowerCase()) { // find product
                return product; // return product
            }
        }
        return null; // null return
    }

}

// Two instances of this class with sample data
const milk = new PerishableProductsProperties("Milk", 8.99, 2, "2025-04-22");
const yogurt = new PerishableProductsProperties("Yogurt", 5.99, 8, "2025-04-28");
const television = new ProductProperties("Television", 325.99, 1,); // New instance after Static Method

const cart = [milk, yogurt, television]; // cart array

ProductProperties.applyDiscount(cart, 0.1); // DIscount

console.log("Price after 10% Discount: ");
cart.forEach(p => console.log(p.toString())); // String after discount

//console.log(milk.toString());
//console.log(yogurt.toString());