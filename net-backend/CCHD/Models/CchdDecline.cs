using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class CchdDecline
    {
        public int CchdDeclineId { get; set; } 

        [Required]
        [MaxLength(255)]
        public string Reason { get; set; }

        /*
         Chastiefol how does creating BLOB work?
         */

        [Required]
        public Signature ParentSignature { get; set; }

        [Required]
        [MaxLength(255)]
        public string ParentName { get; set; }

        [Required]
        public Date ParentDate { get; set; }

        [Required]
        public Signature PhysicianSignature { get; set; }

        [Required]
        [MaxLength(255)]
        public string PhysicianName { get; set; }

        [Required]
        public Date PhysicianDate { get; set; }

        [Required]
        public Decline DeclineId { get; set; }
    }
}
