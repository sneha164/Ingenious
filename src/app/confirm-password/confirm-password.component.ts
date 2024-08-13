import { Component } from '@angular/core';
import {CheckboxModule} from "primeng/checkbox";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-confirm-password',
  standalone: true,
    imports: [
        CheckboxModule,
        FloatLabelModule,
        InputTextModule
    ],
  templateUrl: './confirm-password.component.html',
  styleUrl: './confirm-password.component.scss'
})
export class ConfirmPasswordComponent {

}
