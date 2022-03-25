import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MarkView, StudentView, TeacherView, WordView } from 'src/app/class/classViews';

const httpOptions ={
  headers : new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url="https://localhost:44340/api"

  constructor(private http: HttpClient) { }

  //login

  //User exist
  //Does the student exist in the system
  
  IsStudent(id: string, password: number){
    return this.http.get<StudentView>(`${this.url}/Login/IsStudent/${id}/${password}`);
  }
  //Does the teacher exist in the system
  IsTeacher(id: string, password: number){
    return this.http.get<TeacherView>(`${this.url}/Login/IsTeacher/${id}/${password}`);
  }
  //new user
  //Is ID Of an existing student in the system
  IsStudentID(id: string){
    return this.http.get<StudentView>(`${this.url}/Login/IsStudentID/${id}`)
  }
  // Insert a student to the system
  InsertS(newStudent: StudentView){
    return this.http.post<StudentView>(`${this.url}/Login/InsertS`,newStudent, httpOptions)
  }
  // Is ID Of an existing student in the system
  IsTeacherID(id: string){
    return this.http.get<TeacherView>(`${this.url}/Login/IsTeacherID/${id}`)
  }
  //Insert a teacher to the system
  InsertT(newTeacher: TeacherView){
    return this.http.post<TeacherView>(`${this.url}/Login/InsertT`,newTeacher, httpOptions)
  }

  //student
  //Receive an array of words from the system
  ArrWords(level: number){
    return this.http.get<WordView[]>(`${this.url}/Student/ListWordsByLevel/${level}`);
  }

  //teacher
  //Student teacher update
  updateTeacher(newStudent: StudentView){
    return this.http.post<StudentView>(`${this.url}/Teacher/updateTeacherOfStudent`,newStudent,httpOptions);
  }
  //Displays the list of students with the level at which each student is
  StudentsLevel(id: string){
    return this.http.get<StudentView[]>(`${this.url}/Teacher/StudentsLevel/${id}`);
  } 
  //Presenting a particular student with his grades according to a particular level
  StudentLevelWithScore(id: string, level: number){
    return this.http.get<number>(`${this.url}/Teacher/StudentLevel/${id}/${level}`)
  }
  //Introducing a particular student with all his grades
  StudentMarks(id: string){
    return this.http.get<MarkView[]>(`${this.url}/Teacher/listMarks/${id}`);
  }
  //Average by level
  Average(level: number, id: string){
    return this.http.get<number>(`${this.url}/Teacher/Average/${level}/${id}`)
  }
  //Does the student belong to the teacher
  IsTeacherExist(studentId: string, teacherId: string){
    return this.http.get<boolean>(`${this.url}/Teacher/IsTeacherExist/${studentId}/${teacherId}`)
  }
  //Does the student belong to the teacher and has passed the required level
  IsTeacherWithLevel(studentId: string, teacherId: string, level: number){
    return this.http.get<boolean>(`${this.url}/Teacher/IsTeacherWithLevel/${studentId}/${teacherId}/${level}`)
  }
  //Update score
  updateScore(newMark: MarkView){
    return this.http.post<MarkView>(`${this.url}/Teacher/updateScore`, newMark, httpOptions);
  }
  //Adding score
  addScore(newMark: MarkView){
    return this.http.post<MarkView>(`${this.url}/Teacher/addScore`, newMark, httpOptions);
  }
  //ifScore
  ifScore(id: string, level: number){
    return this.http.get<boolean>(`${this.url}/Teacher/ifScore/${id}/${level}`);
  }
  //level is student
  levelIsStudent(id: string, level: number){
    return this.http.get<boolean>(`${this.url}/Teacher/levelIsStudent/${id}/${level}`);
  }

  //Uupdate level
  // updateLevel(newStudent: StudentView){
  //   return this.http.post<StudentView>(`${this.url}/Student/updateLevel`,newStudent, httpOptions);
  // }
}
