import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FinishComponent } from './components/student/finish/finish/finish.component';
import { LearnOneComponent } from './components/student/learn/learn-one/learn-one.component';
import { LearnTwoComponent } from './components/student/learn/learn-two/learn-two.component';
import { LearnThreeComponent } from './components/student/learn/learn-three/learn-three.component';
import { LearnFourComponent } from './components/student/learn/learn-four/learn-four.component';
import { LearnFiveComponent } from './components/student/learn/learn-five/learn-five.component';
import { LearnSixComponent } from './components/student/learn/learn-six/learn-six.component';
import { StudentMainComponent } from './components/student/student-main/student-main/student-main.component';
import { AllStudentsComponent } from './components/teacher/all-students/all-students.component';
import { AverageComponent } from './components/teacher/average/average.component';
import { DialogAddStudentComponent } from './components/teacher/dialog-add-student/dialog-add-student.component';
import { DialogAverageComponent } from './components/teacher/dialog-average/dialog-average.component';
import { DialogDataErrorComponent } from './components/teacher/dialog-data-error/dialog-data-error.component';
import { DialogExistTeacherComponent } from './components/teacher/dialog-exist-teacher/dialog-exist-teacher.component';
import { DialogGreadStudentComponent } from './components/teacher/dialog-gread-student/dialog-gread-student.component';
import { DialogLevelStudentComponent } from './components/teacher/dialog-level-student/dialog-level-student.component';
import { DialogStudentNotExistComponent } from './components/teacher/dialog-student-not-exist/dialog-student-not-exist.component';
import { GreadStudentComponent } from './components/teacher/gread-student/gread-student.component';
import { LevelStudentComponent } from './components/teacher/level-student/level-student.component';
import { TeacherMainComponent } from './components/teacher/teacher-main/teacher-main.component';
import { LoginMainComponent } from './components/login/login-main/login-main.component';
import { NewUserComponent } from './components/login/new-user/new-user.component';
import { RegisteredUserComponent } from './components/login/registered-user/registered-user.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AllServiceService } from './services/all/all-service.service';
import { DataServiceService } from './services/data/data-service.service';
import { HttpServiceService } from './services/http/http-service.service';
import { StudentServiceService } from './services/student/student-service.service';
import { TeacherServiceService } from './services/teacher/teacher-service.service';
import { MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { DialogExistIDComponent } from './components/login/dialog-exist-id/dialog-exist-id.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { DialogAddScoreComponent } from './components/teacher/dialog-add-score/dialog-add-score.component';

const routes: Routes = [
  {path: '1', component: TeacherMainComponent},
  {path: '2', component: StudentMainComponent},
  {path: 'learn-level-one', component:LearnOneComponent},
  {path: 'learn-level-two', component:LearnTwoComponent},
  {path: 'learn-level-three', component:LearnThreeComponent},
  {path: 'learn-level-four', component:LearnFourComponent},
  {path: 'learn-level-five', component:LearnFiveComponent},
  {path: 'learn-level-six', component:LearnSixComponent},
  {path: 'finish', component:FinishComponent},
  { path: 'all-students', component: AllStudentsComponent},
  { path: 'average', component: AverageComponent},
  { path: 'gread-student', component: GreadStudentComponent},
  { path: 'level-student', component: LevelStudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FinishComponent,
    LearnOneComponent,
    LearnTwoComponent,
    LearnThreeComponent,
    LearnFourComponent,
    LearnFiveComponent,
    LearnSixComponent,
    StudentMainComponent,
    AllStudentsComponent,
    AverageComponent,
    DialogAddStudentComponent,
    DialogAverageComponent,
    DialogDataErrorComponent,
    DialogExistTeacherComponent,
    DialogGreadStudentComponent,
    DialogLevelStudentComponent,
    DialogStudentNotExistComponent,
    GreadStudentComponent,
    LevelStudentComponent,
    TeacherMainComponent,
    LoginMainComponent,
    NewUserComponent,
    RegisteredUserComponent,
    DialogExistIDComponent,
    DialogAddScoreComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
    MatSortModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    MatStepperModule,
    MatCardModule,
    MatSelectModule,
    RouterModule.forRoot([...routes,
      {path: '', redirectTo: 'LoginMainComponent', pathMatch: 'full'},
      {path: '', component: LoginMainComponent, pathMatch: 'full'}]),
    BrowserAnimationsModule
  ],
  // exports: [MatFormFieldModule, MatInputModule],
  providers: [HttpServiceService, DataServiceService, AllServiceService, StudentServiceService, TeacherServiceService],
  bootstrap: [AppComponent],
  // entryComponents: [DialogLevelStudentComponent, DialogGreadStudentComponent, Dialog]
})
export class AppModule { }
