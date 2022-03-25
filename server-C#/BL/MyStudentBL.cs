using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace BL
{
    public class MyStudentBL
    {
        //insert a new student
        public static void InsertStudent(string stuentId, int password, int level, string teacherId)
        {
            Student student = new Student();
            student.Password = password;
            student.Level = level;
            student.StudentId = stuentId;
            student.TeacherRefId = teacherId;
            
            ProjectDbContext.Context.Students.Add(student);
            ProjectDbContext.Context.SaveChanges();
        }

        //Student advanced level
        public static void StudentRiseLevel(string studentId, int level)
        {
            Student student = ProjectDbContext.Context.Students.FirstOrDefault(s => s.StudentId == studentId);
            student.Level = level+1;

            ProjectDbContext.Context.SaveChanges();
        }

        //Returning student information
        public static Student GetStudent(string id, int password)
        {
            return ProjectDbContext.Context.Students.FirstOrDefault(student => student.Password == password && student.StudentId == id);
            
        }

        //Return of student information according to the entry of ID.
        public static Student GetStudentID(string id)
        {
            return ProjectDbContext.Context.Students.FirstOrDefault(student => student.StudentId == id);
        }

        
    }
}
