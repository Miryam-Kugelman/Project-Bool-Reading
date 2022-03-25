using AutoMapper;
using BL.View;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace SI_Project.App_Start
{
    public class MapperConfig
    {
        public static void createMapping()
        {
            Mapper.Initialize(map =>
            {
                map.CreateMap<StudentView, Student > ().
                ForMember(dest => dest.StudentId, opt => opt.MapFrom(src => src.StudentId)).
                ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password)).
                ForMember(dest => dest.Level, opt => opt.MapFrom(src => src.Level)).
                ForMember(dest => dest.TeacherRefId, opt => opt.MapFrom(src => src.TeacherRefId));

                map.CreateMap<Student, StudentView>().
                ForMember(dest => dest.StudentId, opt => opt.MapFrom(src => src.StudentId)).
                ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password)).
                ForMember(dest => dest.Level, opt => opt.MapFrom(src => src.Level)).
                ForMember(dest => dest.TeacherRefId, opt => opt.MapFrom(src => src.TeacherRefId));
                
                map.CreateMap<Teacher, TeacherView>().
                ForMember(dest => dest.TeacherId, opt => opt.MapFrom(src => src.TeacherId)).
                ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password));

                map.CreateMap<TeacherView, Teacher > ().
                ForMember(dest => dest.TeacherId, opt => opt.MapFrom(src => src.TeacherId)).
                ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password));

                map.CreateMap<Mark, MarkView>().
                ForMember(dest => dest.MarkId, opt => opt.MapFrom(src => src.MarkId)).
                ForMember(dest => dest.MarkLevel, opt => opt.MapFrom(src => src.MarkLevel)).
                ForMember(dest => dest.StudentRefId, opt => opt.MapFrom(src => src.StudentRefId));

                map.CreateMap<MarkView, Mark>().
                ForMember(dest => dest.MarkId, opt => opt.MapFrom(src => src.MarkId)).
                ForMember(dest => dest.MarkLevel, opt => opt.MapFrom(src => src.MarkLevel)).
                ForMember(dest => dest.StudentRefId, opt => opt.MapFrom(src => src.StudentRefId));

                map.CreateMap<TestOrLearn, TestOrLearnView>().
                ForMember(dest => dest.Level, opt => opt.MapFrom(src => src.Level));

                map.CreateMap<TestOrLearnView, TestOrLearn>().
                ForMember(dest => dest.Level, opt => opt.MapFrom(src => src.Level));

                map.CreateMap<Word, WordView>().
                ForMember(dest => dest.WordId, opt => opt.MapFrom(src => src.WordId)).
                ForMember(dest => dest.WordName, opt => opt.MapFrom(src => src.WordName)).
                ForMember(dest => dest.TestOrLearnRefId, opt => opt.MapFrom(src => src.TestOrLearnRefId));

                map.CreateMap<WordView, Word>().
                ForMember(dest => dest.WordId, opt => opt.MapFrom(src => src.WordId)).
                ForMember(dest => dest.WordName, opt => opt.MapFrom(src => src.WordName)).
                ForMember(dest => dest.TestOrLearnRefId, opt => opt.MapFrom(src => src.TestOrLearnRefId));
            }
      );  }
    }
}