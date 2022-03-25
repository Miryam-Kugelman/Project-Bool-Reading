using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;


namespace BL
{
    public class MyWordsBL
    {
        //Return of an array of words at the request of a level
        public static List<Word> ListWords(int level)
        {
            return ProjectDbContext.Context.Words.Where(l => l.TestOrLearnRefId == level).ToList();
        }

        //Return what level the student is at
        public static int StudentLevel(string id)
        {
            return ProjectDbContext.Context.Students.FirstOrDefault(student => student.StudentId == id).Level;
        }
    }
}
