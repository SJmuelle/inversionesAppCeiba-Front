import { Injectable } from '@angular/core';
import { AppSettingsService } from 'app/core/config/app-settings.service';
import { UtilityService } from 'app/core/shared/utility.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

constructor(
    private _appSettings: AppSettingsService,
    private _utilityService: UtilityService
  ) {}

  listTransacciones(user: string) {
    const url = this._appSettings.operaciones.url.transacciones+user+'?limit=1000';
    return this._utilityService.getQuery(url).pipe(map(res => res));
  }
}
