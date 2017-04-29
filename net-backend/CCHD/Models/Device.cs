using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class Device
    {
        public int DeviceId { get; set; }

        [Required]
        [MaxLength(255)]
        public string Code { get; set; }
    }
}
