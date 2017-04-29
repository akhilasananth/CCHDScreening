using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class Hospital
    {
        public int HospitalId { get; set; }

        [Required]
        public string DescEN { get; set; }
        [Required]
        public string DescFR { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string City { get; set; }
    }
}
