import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartModule, DropdownModule, FormsModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Week 01','Week 02','Week 03','Week 04','Week 05','Week 06','Week 07','Week 08','Week 09','Week 10','Week 11','Week 12'],
      datasets: [

        {
          label: 'Expected Working Hours',
          data: [120,110,100,90,80,70,60,50,40,28,16,0],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--indigo-500'),
          tension: 0.4
        },
        {
          label: 'Actual Working Hours',
          data: [120,105,90,85,80,70,60,45,35,33,20,0],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4
        }
      ]
    };

  }
}
