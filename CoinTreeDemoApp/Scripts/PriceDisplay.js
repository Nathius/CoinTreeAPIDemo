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
    updatePrice('askPrice',
        newPrice,
        document.getElementById("previousAskPrice"),
        document.getElementById("currentAskPrice"),
        document.getElementById("askMovement"),
        document.getElementById("askWatchFlag")
        );
}

function updateBidPrice(newPrice) {
    updatePrice('bidPrice',
        newPrice,
        document.getElementById("previousBidPrice"),
        document.getElementById("currentBidPrice"),
        document.getElementById("bidMovement"),
        document.getElementById("bidWatchFlag")
        );
}

function updatePrice(cookieName, newPrice, oldDisplayElement, newDisplayElement, movementDisplayElement, watchDisplayElement)
{
    //store current ask price in cookie
    setCookie(cookieName, newPrice, 7);
    
    //copy old current price to previous price
    var oldPrice = currencyToNumber(newDisplayElement.innerHTML);
    oldDisplayElement.innerHTML = numberToCurrency(oldPrice);

    //display new current price
    newDisplayElement.innerHTML = numberToCurrency(newPrice);

    //calculate and display the movement in ask price
    var movement = getPriceMovement(oldPrice, newPrice);
    movementDisplayElement.children[0].innerHTML = movement;
    if (movement > 0){
        movementDisplayElement.children[1].className = 'glyphicon glyphicon-triangle-top';
    }
    else {
        movementDisplayElement.children[1].className = 'glyphicon glyphicon-triangle-bottom';
    }

    //watchDisplayElement
    var watchPrice = currencyToNumber(document.getElementById("currentWatchPrice").innerHTML);

    //if a valid watch price is provided
    if (watchPrice && watchPrice != null && watchPrice != '' && watchPrice != 0 && watchPrice > 0)
    {
        //and that watch price is exceeded by the newPrice
        if(newPrice > watchPrice)
        {
            //update the watch display element
            watchDisplayElement.children[0].innerHTML = 'TRUE';
            watchDisplayElement.children[1].className = 'glyphicon glyphicon-ok';
        }
        else {
            //clear the watch display element
            watchDisplayElement.children[0].innerHTML = '';
            watchDisplayElement.children[1].className = '';
        }
    }
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