using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Teacher
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]

        public string TeacherId { get; set; }
        public int Password { get; set; }

        [ForeignKey("TeacherRefId")]

        public List<Student> Students { get; set; }

    }
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string StudentId { get; set; }
        public int Password { get; set; }
        public int Level { get; set; }
        public string TeacherRefId { get; set; }
        public Teacher Teacher { get; set; }
        [ForeignKey("StudentRefId")]
        public List<Mark> Marks { get; set; }
        public List<TestOrLearn> TestOrLearns { get; set; }
        
    }
    public class Mark
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MarkId { get; set; }
        public int MarkLevel { get; set; }
        public string StudentRefId { get; set; }
        public Student Student { get; set; }
    }

    public class TestOrLearn
    {
        [Key]
        public int Level { get; set; }
     
        
        public List<Student> Students { get; set; }
        [ForeignKey("TestOrLearnRefId")]
        public List<Word> Words { get; set; }
    }

    public class Word
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int WordId { get; set; }
        public String WordName { get; set; }
        public int TestOrLearnRefId { get; set; }
        public String WordToCompare { get; set; }
        public TestOrLearn TestOrLearn { get; set; }
    }
 
    public class plutoContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<TestOrLearn> TestOrLearns { get; set; }
        public DbSet<Word> Words { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Mark> Marks { get; set; }

        public plutoContext() 
            : base("name = model")
        { 
        }
    }
  
    public class MyDAL
    {
    }
}
