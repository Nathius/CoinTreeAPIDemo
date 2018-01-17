using CoinTreeDemoApp.CoinTreeApi;
using CoinTreeDemoApp.CoinTreeApi.Models;
using CoinTreeDemoApp.Models;
using System.Web.Http;

namespace CoinTreeDemoApp.Controllers
{
    public class PriceController : ApiController
    {
        //controller for grabbing data from coiun tree


        [AllowAnonymous, OverrideAuthorization]
        [HttpGet]
        public Payload GetCurrentPrice()
        {
            var priceData = CoinTreeDataFetcher.GetCurrentPrice();

            return new Payload
            {
                Success = true,
                Data = priceData
            };

        }

    }
}
