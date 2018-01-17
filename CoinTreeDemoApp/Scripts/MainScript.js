var currencyFormatter;

$(document).ready(function () {
    //https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
    // Create our number formatter.
    currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    //load in the previous watch price
    loadWatchPriceFromCookieStorage();

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

function loadWatchPriceFromCookieStorage()
{
    var watchPrice = getCookie('watchPrice');
    if (watchPrice && watchPrice != null && watchPrice != '' && watchPrice != 0) {
        var currentWatchPrice = document.getElementById("currentWatchPrice");
        currentWatchPrice.innerHTML = numberToCurrency(watchPrice);
    }
}

function setWatchPrice()
{
    //find watch price input
    var watchPriceInput = document.getElementById("watchPriceInput");
    var currentWatchPrice = document.getElementById("currentWatchPrice");

    currentWatchPrice.innerHTML = numberToCurrency(watchPriceInput.value);
    setCookie('watchPrice', watchPriceInput.value, 7);

    //copy text to watch price value
}