//http://localhost/CoinTreeDemoApp/api/Price


function getPrice(callback) {
    //http://localhost/Kintic.Bene.UserSignUp/Config/GetServiceUrl
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "api/Price",
        "method": "GET",
        "headers": {
            "Content-type": "application/json",
            "cache-control": "no-cache",
        }
    };

    var that = this;
    $.ajax(settings).done(function (response) {
        console.log('GET Price response:');
        console.log(response);

        if (response.Success === true) {
            alert('loaded');

            //parse out the ask and bid price
            var ask = response.Data.Ask;
            var bid = response.Data.Bid;

            //update the display with the current ask and bid price
            var currentAskPrice = document.getElementById("currentAskPrice");
            currentAskPrice.innerHTML = ask;

            var currentBidPrice = document.getElementById("currentBidPrice");
            currentBidPrice.innerHTML = bid;
        }
        else {
            alert('error');
        }
    });
}