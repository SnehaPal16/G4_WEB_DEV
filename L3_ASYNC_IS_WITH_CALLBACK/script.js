let cart = ["shoes" , "shirt" , "wallets"];

function orderDetails(cart){
    let totalItems = cart.length;
    let totalPrice = totalItems * 1000; 
    let order = {
        totalItems : totalItems ,
        totalPrice : totalPrice
    }
    return order;
}

function orderSummary(cb){
    let orderDetails = cb();
    let orderId = (Math.random()*10000)+1
    let orderSummary = {orderDetails , totalPrice , orderId}
}

function paymentGateway(){
    let summary;
    setTimeout(()=>{
        summary = cb();
    },2000)
    
    return summary;
}

function successfulOrder(){
    console.log("Your order id is");
    console.log("No. of Items");
    console.log("Product Details");
    console.log("Amount Paid");    
}


