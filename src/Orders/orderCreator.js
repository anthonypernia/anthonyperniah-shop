import { insertOrderToCloud } from "../DataCloud/InsertOrderToCloud";

const orderCreator = (products, order, updateOrder, totalPrice, user) => {

    let buyerObj = {};
    buyerObj.name = user.name;
    buyerObj.phone = user.phone;
    buyerObj.email = user.email;
    buyerObj.dateOrder = new Date();
    buyerObj.totalPrice = totalPrice();
    order.buyer = buyerObj;
    order.items = [];
    products.forEach(product => {
        let item = {};
        item.title = product.title;
        item.price = product.price;
        item.quantity = product.quantity;
        order.items.push(item);
    });



    console.log(products);
    insertOrderToCloud(order, updateOrder);
};

export {orderCreator}