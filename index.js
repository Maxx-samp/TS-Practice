const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiin", price: 10 },
    { name: "Veggie", price: 9 }
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];
function addNewPizza(pizza) {
    menu.push(pizza);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
    if (!selectedPizza) {
        throw new Error(`${pizzaName} does not exist in the menu`);
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const selectedOrder = orderQueue.find(order => order.id === orderId);
    if (!selectedOrder) {
        throw new Error(`Order with ID ${orderId} does not exist in the order queue`);
    }
    selectedOrder.status = 'completed';
    return selectedOrder;
}
addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Fransico Special', price: 699 });
placeOrder('Chicken Bacon Ranch');
completeOrder(1);
console.log('Menu:', menu);
console.log('Cash in register:', cashInRegister);
console.log('Order queue:', orderQueue);
