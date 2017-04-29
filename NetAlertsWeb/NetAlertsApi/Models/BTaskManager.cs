using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetAlertsApi.Models;

namespace NetAlertsWeb.Models
{
    //Manage all BTasks.
    public class BTaskManager
    {
        public int BTaskManagerId { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
        
        // Todo Add reference here to get a patient Id.

        public BTaskPreScreen BTaskPreScreen { get; set; }
        public virtual List<BTaskHour> BTaskHours { get; set; }
        public BTaskRefer BTaskRefer { get; set; }
        
        public DateTime DateTimeCreated { get; set; }
        public DateTime DateTimePatientBirth { get; set; }

        // Create a new pre screen.
        public void OnPreScreen() { }

        // For a single failed check.
        public void OnCheckFail() { }

        // For a failed screen.
        public void OnScreenFail() { }
    }

}
