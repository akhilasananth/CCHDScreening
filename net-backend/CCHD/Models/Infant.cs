using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class Infant
    {
        public int InfantId { get; set; } 

        /*
            Chastiefol
             1. Date and Time
             2. VARCHAR limits
        */

        [Required]
        [MaxLength(255)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(255)]
        public string LastName { get; set; } 
        [Required]
        [MaxLength(12)]
        public string HealthCard { get; set; }
        [Required]
        [MaxLength(255)]
        public string SubmitterNum { get; set; }
        [MaxLength(1)]
        public string MultipleBirth { get; set; }

        [Required]
        public Date BirthDate { get; set; }
        [Required]
        public Time BirthTime { get; set; }

        [Required]
        public Sex SexId { get; set; }

        [Required]
        public DbSet<CCHD> CchdId { get; set; }
    }
}
