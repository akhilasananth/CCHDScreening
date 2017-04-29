using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class Signature
    {
        public int SignatureId {get;set;}
        
        public string FileName {get;set;}

        public string FileExt {get;set;}

        public virtual Byte[] Bytes {get;set;}
    }
}
