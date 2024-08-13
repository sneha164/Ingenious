import { Component } from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-user-crud',
  standalone: true,
    imports: [
        PrimeTemplate,
        TableModule
    ],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.scss'
})
export class UserCrudComponent {

}
