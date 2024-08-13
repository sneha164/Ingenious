import { Component } from '@angular/core';
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule} from "primeng/button";

@Component({
  selector: 'app-module-details',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule, DropdownModule, ButtonModule
  ],
  templateUrl: './module-details.component.html',
  styleUrl: './module-details.component.scss'
})
export class ModuleDetailsComponent {

}
