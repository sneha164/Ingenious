import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-teacher-crud',
  standalone: true,
    imports: [
        InputTextModule, TableModule, CommonModule
    ],
  templateUrl: './teacher-crud.component.html',
  styleUrl: './teacher-crud.component.scss'
})
export class TeacherCrudComponent {

}
