import { insertOrderToCloud } from "../DataCloud/InsertOrderToCloud";

const orderCreator = (products, order, updateOrder, totalPrice) => {

    let buyerObj = {};
    buyerObj.name = "anthony"
    buyerObj.phone = "123456789"
    buyerObj.address = "123 street"
    buyerObj.email = "anthonyperniah@gmail.com"
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
    
    insertOrderToCloud(order, updateOrder);
};

export {orderCreator}