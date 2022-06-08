using System;
namespace pwaApi.Types
{
    public class TripType
    {
        public int? Id { get; set; }
        public UserType? User { get; set; }
        public int? Distance { get; set; }
        public DateTime? Date { get; set; }
    }
}

