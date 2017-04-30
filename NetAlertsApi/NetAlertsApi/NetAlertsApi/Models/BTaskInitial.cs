using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetAlertsWeb.Models
{
    public class BTaskInitial
    {
        public int BTaskInitialId { get; set; }

        public BStatus BStatus { get; set; } = BStatus.Future;

        public DateTime DateTimeCreated { get; set; }

        
    }
}
