using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetAlertsWeb.Models
{   
    // BTask pre screen.
    public class BTaskPreScreen
    {
        public int BTaskPreScreenId { get; set; }

        public BStatus BStatus { get; set; } = BStatus.Future;

        public DateTime DateTimeCreated { get; set; }

    }
}
