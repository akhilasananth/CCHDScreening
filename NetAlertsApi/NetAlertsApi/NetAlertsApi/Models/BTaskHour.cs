using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetAlertsWeb.Models
{
    // If a screen fails an another screen needs to be completed, set a reminder for later.
    public class BTaskHour
    {
        public int BTaskHourId { get; set; }

        public BStatus BStatus { get; set; } = BStatus.Future;

        public DateTime DateTimeCreated { get; set; }

    }
}
