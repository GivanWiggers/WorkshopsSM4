using System;
namespace pwaApi.Types
{
    public class ReservationType
    {
        public int? Id { get; set; }
        public UserType? User { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}

