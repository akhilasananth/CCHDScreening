using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class DeviceUsed
    {
        public int DeviceUsedId { get; set; }

        [Required]
        public Device DeviceId { get; set; }
    }
}
