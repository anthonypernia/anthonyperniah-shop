import { insertOrderToCloud } from "../DataCloud/insertOrderToCloud";
import { updateOrderToCloud } from "../DataCloud/updateOrderToCloud";

const orderCreator = (products, order, setOrder, totalPrice, user, setOpenLoadingModal) => {
    setOpenLoadingModal(true);
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
    if (order.id.length > 2) {
        updateOrderToCloud(order, setOpenLoadingModal);
    }else{
        insertOrderToCloud(order, setOrder, setOpenLoadingModal);
    }
    
};

export {orderCreator}