/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
    /**
     * @constructor
     * 
     * @param {number} id 
     * @param {string} name 
     * @param {number} quantity 
     * @param {number} price 
     */
    constructor(id, name, quantity, price) {
        /**
         * @type {number}
         */
        this.id = id;

        /**
         * @type {string}
         */
        this.name = name;

        /**
         * @type {number}
         */
        this.quantity = quantity;

        /**
         * @type {number}
         */
        this.price = price;
    }

    /**
     * 
     * @param {string} name 
     * @param {number} quantity 
     * @param {number} price 
     */
    updateDetails(name, quantity, price) {
        this.name = name;
        this.quantity = quantity
        this.price = price;
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`
    }
}

// Jangan hapus kode di bawah ini!
export default Item;
