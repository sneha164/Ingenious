import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [FormsModule, InputTextModule, DropdownModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.scss'
})
export class AddTeacherComponent {
  value: string | undefined;
}
