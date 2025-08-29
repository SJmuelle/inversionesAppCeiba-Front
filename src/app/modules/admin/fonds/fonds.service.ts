import { Injectable } from '@angular/core';
import { AppSettingsService } from 'app/core/config/app-settings.service';
import { UtilityService } from 'app/core/shared/utility.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FondsService {

constructor(
    private _appSettings: AppSettingsService,
    private _utilityService: UtilityService
  ) {}

  list(user: string) {
    const url = this._appSettings.fondos.url.getFondosCliente+user;
    return this._utilityService.postQuery(url, null).pipe(map(res => res));
  }

  cancelarSuscripcion(idSuscripcion: string) {
    const url = this._appSettings.operaciones.url.cancelaciones;
    return this._utilityService.postQuery(url, { idSuscripcion: idSuscripcion }).pipe(map(res => res));
  }

  subscribirFondo(data: any) {
    const url = this._appSettings.operaciones.url.suscripciones;
    return this._utilityService.postQuery(url, data).pipe(map(res => res));
  }
}
