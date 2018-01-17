namespace CoinTreeDemoApp.CoinTreeApi.Models
{
    public class PriceData
    {
        //current buy price
        public decimal Ask { get; set; }

        //current sell price
        public decimal Bid {get; set; }

        //Unknown; 'Generally not useful. Used by some chart services.'
        public decimal Spot {get; set; }
    }
}