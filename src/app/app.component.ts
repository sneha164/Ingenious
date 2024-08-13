import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {TeacherDetailsComponent} from "./teacher-details/teacher-details.component";
import {AddTeacherComponent} from "./add-teacher/add-teacher.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {UserCrudComponent} from "./user-crud/user-crud.component";
import {ModuleDetailsComponent} from "./module-details/module-details.component";
import {TeacherCrudComponent} from "./teacher-crud/teacher-crud.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,UserProfileComponent, TeacherDetailsComponent, AddTeacherComponent, AddUserComponent, TeacherDetailsComponent, UserCrudComponent,
  ModuleDetailsComponent, TeacherCrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ingenious';
}
