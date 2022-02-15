class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.discount = 0;
    }
    setDiscount(num) {
        if (num >= 0 && num < 100) {
            this.discount = num
            this.price = this.price * (100 - this.discount) / 100;
            return " price " + this.price + " disc " + this.discount + " %";
        } else {
            return " set discount between 0 and 99"
        }
    }
    getPrice() {
        return this.price
    }
}


let product = new Product("тестовый продукт", 560);
let product1 = new Product("ну и какой то продукт", 780.5);
let product2 = new Product("там еще какой то", 1463);
let product3 = new Product("для математики", 1357.67);
product.setDiscount(15);