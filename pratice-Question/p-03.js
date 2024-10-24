

const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];





// question 1

const delivery = orders.filter(order => order.customerId === '234' && order.delivered === false);
//console.log(delivery);


// question 2

const orderTotalPrice = orders.map(order =>{
    const totalPrice = order.items.reduce((acc,item) => acc + item.price,0);
    return{...order,totalPrice};
});
    //console.log(orderTotalPrice);


    // question 3

    const everyOrder = orders.every(order => order.delivered);
    //console.log(everyOrder);


    // question 4

    const anyOrder = orders.some(order => order.customerId === '123');
    //console.log(anyOrder);
    

    const someOrders = orders.filter(order => order.customerId ==='123');
    //console.log(someOrders);
    


    // question 5

    const order = orders.reduce((acc,order) => acc + order.items.reduce((acc,item) => acc + (item.productId === '123'),0),0);
    console.log(order);
    
