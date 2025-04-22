class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name; // Name of Product (string)
        this.price = price; // Price of Product (num)
        this.quantity = quantity; // Stock Quantity (num)
    }

    getTotalValue() { // Get total value of product in stock
        return this.price * this.quantity;
    }

}