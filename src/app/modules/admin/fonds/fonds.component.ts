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
  imports: [TranslocoModule, FuseCardComponent, MatProgressBarModule, MatIconModule, MatButtonModule, MatRippleModule, MatMenuModule, MatTabsModule, MatButtonToggleModule, NgApexchartsModule, NgFor, NgIf, MatTableModule, NgClass, CurrencyPipe],

  templateUrl: './fonds.component.html',
  styleUrl: './fonds.component.scss'
})
export class FondsComponent implements OnInit {





  fondos: any;

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

  }

  cancelarSuscripcion(item: any) {
    let data = {
      clienteId: this.user.id,
      fondoId: item.nombre,
      tipoNotificacion: "Email"
    }
    this._fondService.cancelarSuscripcion(data).subscribe({
      next: (res: any) => {
        alert('Suscripción cancelada con éxito.');
        // Actualizar la lista de fondos después de cancelar la suscripción
        this._fondService.list(this.user.cedula).subscribe((updatedRes: any) => {
          this.fondos = updatedRes;
        });
      },
      error: (err) => {
        console.error('Error al cancelar la suscripción', err);
        alert('Error al cancelar la suscripción. Por favor, inténtelo de nuevo.');
      }
    });
  }

  subscribirFondo(item: any) {
      let data = {
        clienteId: this.user.id,
        fondoId: item.nombre,
        monto: item.montoMinimo,
        tipoNotificacion: "Email"
      }
      this._fondService.subscribirFondo(data).subscribe({
        next: (res: any) => {
          alert('Suscripción cancelada con éxito.');
          // Actualizar la lista de fondos después de cancelar la suscripción
          this._fondService.list(this.user.cedula).subscribe((updatedRes: any) => {
            this.fondos = updatedRes;
          });
        },
        error: (err) => {
          console.error('Error al cancelar la suscripción', err);
          alert('Error al cancelar la suscripción. Por favor, inténtelo de nuevo.');
        }
      });
    
  }
}
