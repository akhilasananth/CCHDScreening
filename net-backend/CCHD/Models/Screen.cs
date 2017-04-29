using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class Screen
    {
    	/*
    		chastiefol
    		double (4, 2)
    	 */
        public int ScreenId { get; set; }

        [Required]
        public Date Date { get; set; }

        [Required]
        public Time Time { get; set; }

        [Required]
        [Range(0, 100)]
        public int RHand { get; set; }

        [Required]
        [Range(0, 100)]
        public int Foot { get; set; }

        [Required]
        public ScreenStatus ScreenStatusId { get; set; }

        [Required]
        public Nurse NurseId {get; set;}
        
    }
}
