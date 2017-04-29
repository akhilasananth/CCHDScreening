using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class User
    {
    	[MaxLength(255)]
        public string UserId { get; set; }

        [Required]
        [MaxLength(255)]
        public string Password { get; set; }
       	[Required]

       	public Hospital HospitalId { get; set; }
    }
}
