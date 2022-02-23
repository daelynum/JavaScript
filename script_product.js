class Product {
    constructor(name, price, color = none) {
        this.name = name;
        this.price = price;
        this.color = color
        this.discount = 0;
    }
    setDiscount(num) {
        if (num >= 0 && num < 100) {
            this.discount = num
            this.price = (this.price * (100 - this.discount) / 100);
            return " price " + this.price.toFixed(2) + " disc " + this.discount + " %";
        } else {
            return " set discount between 0 and 99"
        }
    }
    getPrice() {
        return this.price.toFixed();
    }
}