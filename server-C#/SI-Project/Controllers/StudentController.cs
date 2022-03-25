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
   // [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class StudentController : ApiController
    {
        //request an array of wprds at a certain level
        [Route("api/Student/ListWordsByLevel/{level}")]
        [HttpGet]
        public List<WordView> ListWordsByLevel(int level)
        {
            return Mapper.Map<List<Word>, List<WordView>>(MyWordsBL.ListWords(level));
        }

        //update level of student
        [Route("api/Student/updateLevel")]
        [HttpPost]
        public IHttpActionResult updateLevel(StudentView newStudent)
        {
            try
            {
                MyStudentBL.StudentRiseLevel(newStudent.StudentId, newStudent.Level);
                return Ok<StudentView>(newStudent);
            }
            catch (Exception ex)
            {
                return Ok<StudentView>(null);
            }
        }

    }   
}
