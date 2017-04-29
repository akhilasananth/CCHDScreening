using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class Nurse
    {
        public int NurseId { get; set; }

        [Required]
        [MaxLength(255)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(255)]
        public string LastName { get; set; } 
        [Required]
       	public Device DeviceId { get; set; }
       	[Required]
       	public DbSet<User> UserId { get; set; }
        
        public DbSet<DeviceUsed>? DeviceUsedId { get; set; }
    }
}
