$(document).ready(function () {
    //load the previous app run prices and display as current
    loadPricesFromCookieStorage();

    //Retrieve new current prices from the api and display 
    //automatically (rolling the cookie loaded prices into the previous slot)
    getPrice();

    //wait and refresh the prices every 30 seconds
    setInterval(function () {
        getPrice();
    }, 30000);
});

function loadPricesFromCookieStorage()
{
    //load in the previous ask and bid price from cookies if available
    var oldAsk = getCookie('askPrice');
    var oldBid = getCookie('bidPrice');

    //updates the display if the loaded price seems valid
    if (oldAsk && oldAsk != null && oldAsk != '' && oldAsk != 0) {
        updateAskPrice(oldAsk);
    }

    if (oldBid && oldBid != null && oldBid != '' && oldBid != 0) {
        updateBidPrice(oldBid);
    }
}