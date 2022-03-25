using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class MyTeacherBL
    {
        public static Boolean levelIsStudent(string id, int level)
        {
            Student student = ProjectDbContext.Context.Students.FirstOrDefault(s => s.StudentId == id);
            if(student.Level +1 == level || student.Level > level)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        //Displays the list of students with the level at which each student is
        public static List<Student> ListForStudentWithLevel(string teacherId)
        {
            return ProjectDbContext.Context.Students.Where(st => st.TeacherRefId == teacherId).ToList();
        }

        //Presentation of a specific student (according to the entry of the ID number) with his grades according to a certain level.
        public static int StudentMarksLevel(string studentId, int level)
        {
            return ProjectDbContext.Context.Marks.FirstOrDefault(m => m.StudentRefId == studentId && m.MarkId == level).MarkLevel;

        }

        //Return of an array of grades for a particular student
        public static List<Mark> ListMarks(string id)
        {
            return ProjectDbContext.Context.Marks.Where(m => m.StudentRefId == id).ToList();
        }

        //Average student grades according to a certain level.
        public static double AverageStudent(int level, string teacherId)
        {
            return ProjectDbContext.Context.Students.Join(ProjectDbContext.Context.Marks, s => s.StudentId, m => m.StudentRefId, (s, m) => new
            {
                studentId = s.StudentId,
                //level = s.level,
                level = m.MarkId,
                markLevel = m.MarkLevel,
                teacherRefId = s.TeacherRefId
            }
            ).ToList().Where(st => st.teacherRefId == teacherId && st.level == level)
            .Average(a => a.markLevel);
        }

        //insert a new teacher
        public static void InsertTeacher(string teacherId, int password)
        {
            Teacher teacher = new Teacher();
            teacher.TeacherId = teacherId;
            teacher.Password = password;

            ProjectDbContext.Context.Teachers.Add(teacher);
            ProjectDbContext.Context.SaveChanges();
        }
        //Returning teacher information
        public static Teacher GetTeacher(string id, int password)
        {
            return ProjectDbContext.Context.Teachers.FirstOrDefault(teacher => teacher.Password == password && teacher.TeacherId == id);

        }

        //Return of teacher information upon entry of ID
        public static Teacher GetTeacherID(string id)
        {
            return ProjectDbContext.Context.Teachers.FirstOrDefault(teacher => teacher.TeacherId == id);
        }

        //Student teacher update
        public static void updateTeacher(string studentId, string teacherId)
        {
            Student student = ProjectDbContext.Context.Students.FirstOrDefault(s => s.StudentId == studentId);
            student.TeacherRefId = teacherId;

            ProjectDbContext.Context.SaveChanges();
        }

        // Does the student exist for the given teacher as well as is the student at the given level
        public static Boolean IsTeacherWithLevel(string studentId, string teacherId, int level)
        {
            Student s = ProjectDbContext.Context.Students.FirstOrDefault(student => student.StudentId == studentId && student.TeacherRefId == teacherId && student.Level >= level);
            if (s != null)
            {
                return true;
            }
            else
                return false;
        }

        // Does the student exist for the given teacher 
        public static Boolean IsTeacherExist(string studentId, string teacherId)
        {
            Student s = ProjectDbContext.Context.Students.FirstOrDefault(student => student.StudentId == studentId && student.TeacherRefId == teacherId );
            if (s != null)
            {
                return true;
            }
            else
                return false;
        }

        //Return if exist score.
        public static Boolean ifScore(string id, int level)
        {
            Mark mark = ProjectDbContext.Context.Marks.FirstOrDefault(s => s.StudentRefId == id && s.MarkId == level);

            if (mark != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        //Enter score
        public static void addScore(string id, int level, int score)
        {
            Mark mark = new Mark();
            Student student = ProjectDbContext.Context.Students.FirstOrDefault(s => s.StudentId == id);

            mark.MarkId = level;
            mark.MarkLevel = score;
            mark.StudentRefId = id;

            student.Level++;

            ProjectDbContext.Context.Marks.Add(mark);
            ProjectDbContext.Context.SaveChanges();
        }
        //Update score
        public static void updateScore(string id, int level, int score)
        {
            Mark mark = ProjectDbContext.Context.Marks.FirstOrDefault(s => s.StudentRefId == id && s.MarkId == level);

            mark.MarkLevel = score;

            ProjectDbContext.Context.SaveChanges();
        }
    }
}
