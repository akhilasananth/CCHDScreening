using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using NetAlertsApi.Models;

namespace NetAlertsWeb.Models.ViewModels
{
    public class BTaskManagerViewModel
    {
        public ApplicationUser ApplicationUser { get; set; }

        [Display(Name = "Birth date and time: ")]
        public DateTime DateTimeBorn { get; set; }

        public string PatientIdentificationNumber { get; set; }

       
    }
}
