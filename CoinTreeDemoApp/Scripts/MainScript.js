$(document).ready(function () {

    //load the page and display current price
    getPrice();

    //refresh the page every 30 seconds
    setInterval(function () {
        console.log('ping');
        getPrice();
    }, 3000);
});