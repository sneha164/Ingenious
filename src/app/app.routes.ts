import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {AddTeacherComponent} from "./add-teacher/add-teacher.component";
import {ConfirmPasswordComponent} from "./confirm-password/confirm-password.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ErrorComponent} from "./error/error.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {ModuleDetailsComponent} from "./module-details/module-details.component";
import {OtpComponent} from "./otp/otp.component";
import {PopupMessageComponent} from "./popup-message/popup-message.component";
import {TeacherDetailsComponent} from "./teacher-details/teacher-details.component";
import {UserCrudComponent} from "./user-crud/user-crud.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

export const routes: Routes = [
  { path:"login", component:LoginComponent, title:"Login"},
  { path:"add-teacher", component:AddTeacherComponent, title:"Add User"},
  { path:"add-teacher", component:AddUserComponent, title:"Add User"},
  { path:"confirm-password", component:ConfirmPasswordComponent, title:"Confirm Password"},
  { path:"dashboard", component:DashboardComponent, title:"Dashboard"},
  { path:"error", component:ErrorComponent, title:"Error"},
  { path:"forget-password", component:ForgetPasswordComponent, title:"Forget Password"},
  { path:"module-details", component:ModuleDetailsComponent, title:"Module Details"},
  { path:"otp", component:OtpComponent, title:"OTP"},
  { path:"popup-message", component:PopupMessageComponent, title:"Popup message"},
  { path:"teacher-details", component:TeacherDetailsComponent, title:"Teacher Details"},
  { path:"user-crud", component:UserCrudComponent, title:"User CRUD"},
  { path:"user-profile", component:UserProfileComponent, title:"User Profile"},
];
