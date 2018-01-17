//http://localhost/CoinTreeDemoApp/api/Price


function getPrice() {
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
            //parse out the ask and bid price
            var ask = response.Data.Ask;
            var bid = response.Data.Bid;

            //update the display with the current ask and bid price
            updateAskPrice(ask);
            updateBidPrice(bid);
            
        }
        else {
            alert('error');
        }
    });
}

function updateAskPrice(newPrice)
{
    var currentAskPrice = document.getElementById("currentAskPrice");
    var previousAskPrice = document.getElementById("previousAskPrice");

    //copy old current price to previous price
    var oldPrice = currentAskPrice.innerHTML;
    previousAskPrice.innerHTML = oldPrice;

    //display new current price
    currentAskPrice.innerHTML = newPrice;

    //calculate and display the movement in ask price
    var askMovement = document.getElementById("askMovement");
    askMovement.innerHTML = getPriceMovement(oldPrice, newPrice);


}

function updateBidPrice(newPrice)
{
    var currentBidPrice = document.getElementById("currentBidPrice");
    var previousBidPrice = document.getElementById("previousBidPrice");

    //copy old current price to previous price
    var oldPrice = currentBidPrice.innerHTML;
    previousBidPrice.innerHTML = oldPrice;

    //display new current price
    currentBidPrice.innerHTML = newPrice;

    //calculate and display the movement in bid price
    var bidMovement = document.getElementById("bidMovement");
    bidMovement.innerHTML = getPriceMovement(oldPrice, newPrice);
}

function getPriceMovement(oldPrice, newPrice)
{
    //skip calculation if old value is not present
    if (oldPrice == null || oldPrice == 0 || oldPrice == '')
    {
        return '-';
    }

    //eg old = 20 new = 60; newAsPercentageOfOld = 300
    var newAsPercentageOfOld = (newPrice / oldPrice * 100);

    //100 - 300; difference = -200
    var difference = 100 - newAsPercentageOfOld;

    //-200 * -1 = 200; ie price tripeled by increasing by 200%
    var movement = difference * -1;

    return round_number(movement, 4);
}

//from stack overflow question https://stackoverflow.com/questions/2221167/javascript-formatting-a-rounded-number-to-n-decimals
function round_number(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}