using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using BL;
using BL.View;
using DAL;
using System.Web.Http.Cors;


namespace SI_Project.Controllers
{

    [System.Web.Http.Cors.EnableCors("*", "*", "*")]
    public class TeacherController : ApiController
    {
        // Does the student exist for the given teacher as well as is the student at the given level
        [Route("api/Teacher/IsTeacherWithLevel/{studentId}/{teacherId}/{level}")]
        [HttpGet]
        public Boolean IsTeacherWithLevel(string studentId, string teacherId, int level)
        {
            return MyTeacherBL.IsTeacherWithLevel(studentId, teacherId, level);
        }

        // Does the student exist for the given teacher 
        [Route("api/Teacher/IsTeacherExist/{studentId}/{teacherId}")]
        [HttpGet]
        public Boolean IsTeacherExist(string studentId, string teacherId)
        {
            return MyTeacherBL.IsTeacherExist(studentId, teacherId);
        }

        //Request for student list + level at which each one is
        [Route("api/Teacher/StudentsLevel/{teacherId}")]
        [HttpGet]
        public List<StudentView> StudentsLevel(string teacherId)
        {
            return Mapper.Map<List<Student>, List<StudentView>>(MyTeacherBL.ListForStudentWithLevel(teacherId));
        }

        //checking if student in the one level before
        [Route("api/Teacher/levelIsStudent/{id}/{level}")]
        [HttpGet]
        public Boolean levelIsStudent(string id, int level)
        {
            return MyTeacherBL.levelIsStudent(id,level);
        }
        //Request student presentation by level
        [Route("api/Teacher/StudentLevel/{studentId}/{level}")]
        [HttpGet]
        public int StudentLevel(string studentId, int level)
        {
            return MyTeacherBL.StudentMarksLevel(studentId, level);
        }

        //Request all grades of a particular student
        [Route("api/Teacher/listMarks/{id}")]
        [HttpGet]
        public List<MarkView> listMarks(string id)
        {
            return Mapper.Map<List<Mark>, List<MarkView>>(MyTeacherBL.ListMarks(id));
        }

        //Request averages by level
        [Route("api/Teacher/Average/{level}/{teacherId}")]
        [HttpGet]
        public double Average(int level, string teacherId)
        {
             return MyTeacherBL.AverageStudent(level, teacherId);
        }

        //Updates the student's details to which teacher he belongs
        [Route("api/Teacher/updateTeacherOfStudent")]
        [HttpPost]
        public IHttpActionResult updateTeacherOfStudent(StudentView newStudent)
        {
            try
            {
                MyTeacherBL.updateTeacher(newStudent.StudentId, newStudent.TeacherRefId);
                return Ok<StudentView>(newStudent);
            }
            catch (Exception ex)
            {
                return Ok<StudentView>(null);
            }
        }



        // student grade update if we have been tested before
        [Route("api/Teacher/updateScore")]
        [HttpPost]
        public IHttpActionResult updateScore(MarkView mark)
        {
            try
            {
                MyTeacherBL.updateScore(mark.StudentRefId, mark.MarkId, mark.MarkLevel);
                return Ok<MarkView>(mark);
            }
            catch (Exception ex)
            {
                return Ok<MarkView>(null);
            }

        }

        //if exist score
        [Route("api/Teacher/ifScore/{studentId}/{level}")]
        [HttpGet]
        public Boolean ifScore(string studentId, int level)
        {
            return MyTeacherBL.ifScore(studentId, level);
        }


        //add score of the score array
        [Route("api/Teacher/addScore")]
        [HttpPost]
        public IHttpActionResult addScore(MarkView mark)
        {
            try
            {
                MyTeacherBL.addScore(mark.StudentRefId, mark.MarkId, mark.MarkLevel);
                return Ok<MarkView>(mark);
            }
            catch (Exception ex)
            {
                return Ok<MarkView>(null);
            }

        }
    }
}
