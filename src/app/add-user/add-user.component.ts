import { Component } from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-add-user',
  standalone: true,
    imports: [
        DropdownModule,
        InputTextModule
    ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

}
