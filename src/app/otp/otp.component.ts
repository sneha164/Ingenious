import { Component } from '@angular/core';
import {CheckboxModule} from "primeng/checkbox";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-otp',
  standalone: true,
    imports: [
        CheckboxModule,
        FloatLabelModule,
        InputTextModule
    ],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent {

}
