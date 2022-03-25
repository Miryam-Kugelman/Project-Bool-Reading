
export class StudentView{
    StudentId!:string
    Password! :number
    Level! :number
    TeacherRefId!: string 
}

export class TeacherView
{
    TeacherId! :string
    Password! :number
}

export class MarkView
{
    MarkId! :number
    MarkLevel! :number
    StudentRefId! :string
}

export class TestOrLearnView
{
    Level! :number
}

export class WordView
{
    WordId! :number
    WordName! :string
    TestOrLearnRefId! :number
    WordToCompare! :string
}
