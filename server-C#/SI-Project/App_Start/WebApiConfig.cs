using Microsoft.AspNetCore.Cors;
using SI_Project.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace SI_Project
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //var corsAttr = new EnableCorsAttribute("*", "*", "*");
            //config.EnableCors();

            GlobalConfiguration.Configuration.Formatters.Clear();
            GlobalConfiguration.Configuration.Formatters.Add(new System.Net.Http.Formatting.JsonMediaTypeFormatter());//json
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            MapperConfig.createMapping();
        }
    }
}
