import { Component } from '@angular/core';
import {CheckboxModule} from "primeng/checkbox";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {IconFieldModule} from "primeng/iconfield";
import {FormsModule} from "@angular/forms";
import {InputIconModule} from "primeng/inputicon";

@Component({
  selector: 'app-forget-password',
  standalone: true,
    imports: [IconFieldModule, InputTextModule, FormsModule, InputIconModule, CheckboxModule,FloatLabelModule
    ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

}
