const basketholder = document.querySelector(".basket");
//console.log(basketholder);

class basketObj {
    constructor() {
        this.basket = []; // Массив обьектов товара.
    };
    push(...prod) {
        this.basket.push(...prod);
    }
    _getAllProductsData() {
        let res = ""
        for (var item in this.basket) {
            res += "Товар: " + this.basket[item].name + " цена: " + this.basket[item].price + "\n"
        }
        return res
    }
    getSum() {
        let sum = 0;
        this.basket.forEach(element => {
            sum += element.price
        });
        return "в корзине " + this.basket.length + " товаров на сумму:  " + sum.toFixed(2) + " рублей"
    }
    visualBasket() {

        let drowbasket = document.createElement("ol");
        drowbasket.classList.add("basketframe");
        basketholder.appendChild(drowbasket);

        let goodsPosition;

        this.basket.forEach(el => {
            goodsPosition = document.createElement("li");
            //goodsPosition.classList.add("position");
            goodsPosition.setAttribute("id", "catalog");
            if (el.discount) {
                goodsPosition.textContent = "товар: " + el.name + " цена: " + el.price.toFixed(2) + " с учетом скидки: " + el.discount + " %";
                goodsPosition.style.color = "green";
            } else {
                goodsPosition.textContent = "товар: " + el.name + " цена: " + el.price.toFixed(2);
            }
            drowbasket.appendChild(goodsPosition);
        })
        let total = document.createElement("div");
        total.classList.add("total");
        total.textContent = this.getSum();
        drowbasket.appendChild(total);
    }
    refresh() {
        let dropBasket = document.querySelector(".basketframe");
        dropBasket.remove();
    }



}

let userBasket = new basketObj();


userBasket.visualBasket();