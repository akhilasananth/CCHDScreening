using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

namespace CCHD.Models
{
    public class CCHDContext : DbContext
    {
        public CCHDContext(DbContextOptions<CCHDContext> options)
            : base(options)
        {
            Database.Migrate();
        }

        public DbSet<CCHD> CCHDs { get; set; }
        public DbSet<CchdDecline> CchdDeclines { get; set; }
        public DbSet<Decline> Declines { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<DeviceUsed> DeviceUseds { get; set; }
        public DbSet<Hospital> Hospitals { get; set; }
        public DbSet<Infant> Infants { get; set; }
        public DbSet<Nurse> Nurses { get; set; }
        public DbSet<Screen> Screens { get; set; }
        public DbSet<ScreenStatus> ScreenStatuses { get; set; }
        public DbSet<Sex> Sexs { get; set; }
        public DbSet<Signature> Signatures { get; set; }
        public DbSet<User> Users { get; set; }

     }

}
