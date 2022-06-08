using System;
namespace pwaApi.Types
{
    public class TransactionType
    {
        public int? Id { get; set; }
        public UserType? User { get; set; }
        public double? Liters { get; set; }
        public DateTime? Date { get; set; }
        public double? Amount { get; set; }
    }
}

