var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiin", price: 10 },
    { name: "Veggie", price: 9 }
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizza) {
    menu.push(pizza);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizza) { return pizza.name === pizzaName; });
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var selectedOrder = orderQueue.find(function (order) { return order.id === orderId; });
    selectedOrder.status = 'completed';
    return selectedOrder;
}
addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Fransico Special', price: 699 });
placeOrder('Chicken Bacon Ranch');
completeOrder('1');
console.log('Menu:', menu);
console.log('Cash in register:', cashInRegister);
console.log('Order queue:', orderQueue);
