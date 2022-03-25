using AutoMapper;
using BL;
using BL.View;

using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SI_Project.Controllers
{
    [System.Web.Http.Cors.EnableCors("*", "*", "*")]
   // [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class LoginController : ApiController //ControllerBase
    //ApiController
    {
        //If user exist
        //If student
        [Route("api/Login/IsStudent/{id}/{password}")]
        [HttpGet]
        public StudentView IsStudent(string id, int password)
        {
            return Mapper.Map<Student, StudentView>( MyStudentBL.GetStudent(id, password));
        }
       //if teacher
       [Route("api/Login/IsTeacher/{id}/{password}")]
       [HttpGet]
       public TeacherView IsTeacher(string id, int password)
        {
            return Mapper.Map<Teacher, TeacherView>(MyTeacherBL.GetTeacher(id, password));
        }

        //if ID of a student exists in the system

        [Route("api/Login/IsStudentID/{id}")]
        [HttpGet]
        public StudentView IsStudentID(string id)
        {
            return Mapper.Map<Student, StudentView>(MyStudentBL.GetStudentID(id));
        }

        //insert student on the data base.

        [Route("api/Login/InsertS")]
        [HttpPost]
        public IHttpActionResult InsertS(StudentView newStudent)
        {
            try
            {
                MyStudentBL.InsertStudent(newStudent.StudentId, newStudent.Password, newStudent.Level, newStudent.TeacherRefId);
                return Ok<StudentView>(newStudent);
            }
            catch(Exception ex)
            {
                return Ok<StudentView>(null);
            }
        }

        //if ID of a teacher exists in the system
        [Route("api/Login/IsTeacherID/{id}")]
        [HttpGet]
        public TeacherView IsTeachertID(string id)
        {
            return Mapper.Map<Teacher, TeacherView>(MyTeacherBL.GetTeacherID(id));
        }

        //insert teacher on the data base.

        [Route("api/Login/InsertT")]
        [HttpPost]
        public IHttpActionResult InsertT(TeacherView newTeacher)
        {
            try
            {
                MyTeacherBL.InsertTeacher(newTeacher.TeacherId, newTeacher.Password);
                return Ok<TeacherView>(newTeacher);
            }
            catch (Exception ex)
            {
                return Ok<TeacherView>(null);
            }
        }

        //update password if forget password
    }
}