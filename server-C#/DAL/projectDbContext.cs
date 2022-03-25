using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ProjectDbContext:IDisposable
    {
        public static plutoContext Context { get; set; }

        static ProjectDbContext()
        {
            Context = new plutoContext();
        }
        public void Dispose()
        {
            Context.Dispose();
        }
    }
}
