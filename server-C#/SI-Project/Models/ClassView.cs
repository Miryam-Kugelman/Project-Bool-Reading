using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.View
{
    public class StudentView{
        public string StudentId { get; set; }
        public int Password { get; set; }
        public int Level { get; set; }
        public string TeacherRefId { get; set; }
    }
    public class TeacherView
    {
        public string TeacherId { get; set; }
        public int Password { get; set; }
    }
    public class MarkView
    {
        public int MarkId { get; set; }
        public int MarkLevel { get; set; }
        public string StudentRefId { get; set; }
    }

    public class TestOrLearnView
    {
        public int Level { get; set; }
    }

    public class WordView
    {
        public int WordId { get; set; }
        public String WordName { get; set; }
        public int TestOrLearnRefId { get; set; }
        public String WordToCompare { get; set; }
    }
}







