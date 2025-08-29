import { NgFor, NgIf, NgClass, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
  selector: 'app-fonds',
  standalone: true,
  imports: [TranslocoModule,FuseCardComponent, MatProgressBarModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe],

  templateUrl: './fonds.component.html',
  styleUrl: './fonds.component.scss'
})
export class FondsComponent {


  selectedProject='ACME Corp. Backend App';

  fondos=[
      {nombre:"", descripcion:"", monto:0, fecha:"", estado:"" },
  ]
}
