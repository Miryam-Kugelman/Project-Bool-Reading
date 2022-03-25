namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Password = c.Int(nullable: false),
                        Level = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.TestOrLearns",
                c => new
                    {
                        Level = c.Int(nullable: false, identity: true),
                    })
                .PrimaryKey(t => t.Level);
            
            CreateTable(
                "dbo.TestOrLearnStudents",
                c => new
                    {
                        TestOrLearn_Level = c.Int(nullable: false),
                        Student_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.TestOrLearn_Level, t.Student_Id })
                .ForeignKey("dbo.TestOrLearns", t => t.TestOrLearn_Level, cascadeDelete: true)
                .ForeignKey("dbo.Students", t => t.Student_Id, cascadeDelete: true)
                .Index(t => t.TestOrLearn_Level)
                .Index(t => t.Student_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TestOrLearnStudents", "Student_Id", "dbo.Students");
            DropForeignKey("dbo.TestOrLearnStudents", "TestOrLearn_Level", "dbo.TestOrLearns");
            DropIndex("dbo.TestOrLearnStudents", new[] { "Student_Id" });
            DropIndex("dbo.TestOrLearnStudents", new[] { "TestOrLearn_Level" });
            DropTable("dbo.TestOrLearnStudents");
            DropTable("dbo.TestOrLearns");
            DropTable("dbo.Students");
        }
    }
}
