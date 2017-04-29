using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class Decline
    {
        public int DeclineId { get; set; } 

        [Required]
        [MaxLength(255)]
        public string DescEN { get; set; }
        [Required]
        [MaxLength(255)]
        public string DescFR { get; set; }
    }
}
