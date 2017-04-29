using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetAlertsWeb.Models
{
    // When screen results in a failure, create a task to refer.
    public class BTaskRefer
    {
        public int BTaskReferId { get; set; }

        public BStatus BStatus { get; set; } = BStatus.Future;

        public DateTime DateTimeCreated { get; set; }
        

    }
}
