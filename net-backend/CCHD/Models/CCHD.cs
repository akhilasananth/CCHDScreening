using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class CCHD
    {
        [MaxLength(7)]
        public string CchdId { get; set; }

        [Required]
        public Date Date { get; set; }

        [Required]
        public Infant InfantId { get; set; }

        [Required]
        public Nurse NurseId { get; set; }

        public DbSet<CchdDecline> CchdDeclineId { get; set; }
        public DbSet<Screen> ScreenId { get; set; }

    }
}
