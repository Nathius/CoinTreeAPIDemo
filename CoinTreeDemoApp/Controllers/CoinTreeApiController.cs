using CoinTreeDemoApp.CoinTreeApi;
using CoinTreeDemoApp.CoinTreeApi.Models;
using System.Web.Http;

namespace CoinTreeDemoApp.Controllers
{
    public class CoinTreeApiController : ApiController
    {
        //controller for grabbing data from coiun tree


        [Route("GetCurrentPrice")]
        [AllowAnonymous, OverrideAuthorization]
        [HttpGet]
        public PriceData GetCurrentPrice()
        {
            var priceData = CoinTreeDataFetcher.GetCurrentPrice();

            return priceData;

        }

    }
}
