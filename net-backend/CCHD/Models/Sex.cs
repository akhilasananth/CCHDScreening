using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class Sex
    {
        public int SexId { get; set; }

        [Required]
        [MaxLength(255)]
        public string DescEN { get; set; }
        [Required]
        [MaxLength(255)]
        public string DescFR { get; set; }
    }
}
