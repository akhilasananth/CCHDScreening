using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetAlertsWeb.Models
{
    public enum BStatus
    {
        Future, // Task set for a future date.
        Ready, // Task is ready to be completed.
        NotCompleted, // Task was not completed.
        Completed // Task is completed.
    }
}
