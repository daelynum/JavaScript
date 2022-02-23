/* создание обьектов продуктов */

let arrProdName = ["банан", "помидор", "хлеб", "картофель", "рыба", "лук", "чеснок", "молоко", "чай", "кофе", "шоколад", "яйца"];
let arrColor = ["red", "blue", "yellow", "green", "black", "aqua", "azure", "brown", "pick", "chocolate", "beige"];
let arrDiscounts = [0, 11, 20, 3, 14, 7, 0, 17, 8, 8.3, 9.5];
let arrProductsInShop = [];

// наполнение массива обьектов товаров задавая атирбуты обьектов.
for (var i = 0; i < 11; i++) {
    prodPrice = Math.round(Math.random() * 400);
    //console.log(prodPrice);
    var prod = new Product(arrProdName[i], prodPrice, arrColor[i]);
    prod.setDiscount(arrDiscounts[i]);
    arrProductsInShop.push(prod);
}

/* заполнение магазина товарами*/
let shop = document.querySelector(".shop")

for (var i = 0; i < arrProductsInShop.length; i++) {
    const prod = arrProductsInShop[i];

    let product = document.createElement("div"); // оболочка
    product.classList.add("product");

    let img = document.createElement("img");
    img.classList.add("image");
    img.style.backgroundColor = prod.color;
    product.appendChild(img);

    let h4 = document.createElement("h4");
    h4.classList.add("prod-name");
    h4.textContent = prod.name;
    product.appendChild(h4);

    let p = document.createElement("p");
    p.setAttribute("id", "price");
    if (prod.discount)
        p.textContent = prod.price.toFixed(2) + " Руб " + " (-" + prod.discount + "%)";
    else {
        p.textContent = prod.price.toFixed(2) + " Руб";
    }
    product.appendChild(p);

    let pDesc = document.createElement("p");
    pDesc.classList.add("desc");
    pDesc.textContent = "<Описание товара>";
    product.appendChild(pDesc);

    let button = document.createElement("button");
    button.classList.add("button");
    button.setAttribute("id", prod.name);
    button.textContent = "Купить";
    product.appendChild(button);

    shop.appendChild(product);
}


// event listener товаров в магазине
document.querySelector("#product-list")
    .addEventListener("click", (e) => {

        //console.log(e);

        let name = e.target.getAttribute("id");
        //console.log(name);

        if (name) {
            arrProductsInShop.forEach((el) => {
                if (el.name == name)
                    userBasket.push(el);

            })
        }
        userBasket.visualBasket();
        userBasket.refresh();
    })