using CoinTreeDemoApp.CoinTreeApi.Models;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Net;

namespace CoinTreeDemoApp.CoinTreeApi
{
    public class CoinTreeDataFetcher
    {
        public static PriceData GetCurrentPrice()
        {
            var requestUrl = "https://api.cointree.com.au/v1/price/btc/aud";
            var client = new RestClient(requestUrl);
            var request = new RestRequest();

            IRestResponse response = client.Execute(request);

            //error 'handeling'
            if (response.StatusCode != HttpStatusCode.OK)
            {
                throw new Exception(response.Content);

            }

            var parsedData = ParsePriceDataInto(response.Content);
            return parsedData;
        }

        private static PriceData ParsePriceDataInto(string priceDataString)
        {
            //parse string into object
            var rawData = JsonConvert.DeserializeObject<dynamic>(priceDataString);
            
            //parse object into PriceData object
            PriceData data = new PriceData()
            {
                Ask = rawData.ask,
                Bid = rawData.bid,
                Spot = rawData.spot
            };

            //return
            return data;
        }

    }
}