import { Component } from '@angular/core';
import {IconField, IconFieldModule} from "primeng/iconfield";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {InputIconModule} from "primeng/inputicon";
import {CheckboxModule} from "primeng/checkbox";
import {NgOptimizedImage} from "@angular/common";
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IconFieldModule, InputTextModule, FormsModule, InputIconModule, CheckboxModule,FloatLabelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
