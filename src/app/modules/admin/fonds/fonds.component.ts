import { NgFor, NgIf, NgClass, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { Subject, takeUntil } from 'rxjs';
import { TransactionsService } from '../transactions/transactions.service';
import { FondsService } from './fonds.service';

@Component({
  selector: 'app-fonds',
  standalone: true,
  imports: [TranslocoModule,FuseCardComponent, MatProgressBarModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe],

  templateUrl: './fonds.component.html',
  styleUrl: './fonds.component.scss'
})
export class FondsComponent  implements OnInit{





  fondos=[
      {nombre:"", descripcion:"", monto:0, fecha:"", estado:"" },
  ]

  user: User;



  private _unsubscribeAll: Subject<any> = new Subject<any>();
  /**
   * Constructor
   */
  constructor(
    private _userService: UserService,
    private _fondService: FondsService
  ) {
    // Subscribe to user changes
    this._userService.user$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((user: User) => {
        this.user = user;

        this._fondService.list(user.cedula).subscribe({
          next: (res: any) => {

            this.fondos = res;

          },
          error: (err) => {
            // Manejo de errores
            console.error('Error al obtener usuario', err);
          }
        });

      });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
