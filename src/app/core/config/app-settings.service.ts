import { Injectable } from '@angular/core';
import { EndPoints } from './end-points';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {

    /**
      * @description: End-point auth
      */
    public auth = {
        url: {
            login: EndPoints.urlBase('login'),

        }
    };



    /**
     * @description: End-point resumen
     */
    public resumen = {
        url: {
            codigoAgente: EndPoints.urlBase('FabricaCreditos/Resumen?codigoAgente='),
            ClientesAsesor: EndPoints.urlBase('FabricaCreditos/ClientesAsesor?codigoAgente='),
        },
    }



    /**
 * @description: End-point consultaCliente
 */
    public seguimiento = {
        url: {
            consultaCliente: EndPoints.urlBase('FabricaCreditos/ConsultaCliente?cedulaCliente='),
            guardarRespuesta: EndPoints.urlBase('FabricaCreditos/guardarRespuesta'),
        },
    }





}