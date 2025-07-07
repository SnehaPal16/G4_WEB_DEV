let cart = ["shoes", "shirt", "wallets"];

function orderDetails(cart, callback) {
    let totalItems = cart.length;
    let totalPrice = totalItems * 1000;
    let order = {
        totalItems: totalItems,
        totalPrice: totalPrice,
        products: cart
    };
    callback(order);
}

function orderSummary(order, callback) {
    let orderId = Math.floor(Math.random() * 10000) + 1;
    let summary = {
        orderDetails: order,
        orderId: orderId
    };
    callback(summary);
}

function paymentGateway(summary, callback) {
    console.log("Processing payment...");
    setTimeout(() => {
        summary.paymentStatus = "Paid";
        callback(summary);
    }, 2000);
}

function successfulOrder(summary) {
    console.log("Order placed successfully!");
    console.log("Order ID:", summary.orderId);
    console.log("Number of Items:", summary.orderDetails.totalItems);
    console.log("Product Details:", summary.orderDetails.products.join(", "));
    console.log("Amount Paid:", summary.orderDetails.totalPrice);
    console.log("Payment Status:", summary.paymentStatus);
}


orderDetails(cart, (order) => {
    orderSummary(order, (summary) => {
        paymentGateway(summary, (finalSummary) => {
            successfulOrder(finalSummary);
        });
    });
});

