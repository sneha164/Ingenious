import { Component } from '@angular/core';
import {IconFieldModule} from "primeng/iconfield";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    IconFieldModule,
    InputTextModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
