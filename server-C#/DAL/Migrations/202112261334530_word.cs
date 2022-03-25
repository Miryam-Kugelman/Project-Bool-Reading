namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class word : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Words", "WordToCompare", c => c.String());
            DropColumn("dbo.Words", "WordCompare");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Words", "WordCompare", c => c.String());
            DropColumn("dbo.Words", "WordToCompare");
        }
    }
}
