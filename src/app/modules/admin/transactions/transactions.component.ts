import { NgFor, NgIf, NgClass, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseCardComponent } from '@fuse/components/card';
import { TranslocoModule } from '@ngneat/transloco';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/core/user/user.types';
import { IoptionTable, TableComponent } from 'app/shared/table/table.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TranslocoModule,
    TableComponent,
    FuseCardComponent, MatProgressBarModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe],

  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  public listado: any[] = [];
  user: User;
  public encabezados: IoptionTable[] = [

    { name: "cliente", text: "Cedula", typeField: 'text' },
    { name: "nombre", text: "Nombre", typeField: 'text' },
    { name: "descripcion", text: "Oferta", typeField: 'text' },
    { name: "monto", text: "Monto", typeField: 'text' },
  ]


  private _unsubscribeAll: Subject<any> = new Subject<any>();
  /**
   * Constructor
   */
  constructor(
    private _userService: UserService,
    private _transactionsService: TransactionsService
  ) {
    // Subscribe to user changes
    this._userService.user$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((user: User) => {
        this.user = user;

        this._transactionsService.listTransacciones(user.id).subscribe({
          next: (res: any) => {

            this.listado = res;

          },
          error: (err) => {
            // Manejo de errores
            console.error('Error al obtener usuario', err);
          }
        });

      });
  }

}
