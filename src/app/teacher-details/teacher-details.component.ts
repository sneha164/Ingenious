import { Component } from '@angular/core';
import {ScrollPanelModule} from "primeng/scrollpanel";

@Component({
  selector: 'app-teacher-details',
  standalone: true,
  imports: [ScrollPanelModule],
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.scss'
})
export class TeacherDetailsComponent {

}
