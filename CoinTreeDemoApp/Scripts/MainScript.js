$(document).ready(function () {
    //load in the previous ask and bid price from cookies if available
    var oldAsk = getCookie('askPrice');
    var oldBid = getCookie('bidPrice');

    if (oldAsk && oldAsk != null && oldAsk != '' && oldAsk != 0)
    {
        updateAskPrice(oldAsk);
    }

    if (oldBid && oldBid != null && oldBid != '' && oldBid != 0) {
        updateBidPrice(oldBid);
    }

    //load the page and display current price
    getPrice();

    //refresh the page every 30 seconds
    setInterval(function () {
        console.log('ping');
        getPrice();
    }, 30000);
});