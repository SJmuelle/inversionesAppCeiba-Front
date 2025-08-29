import { Injectable } from '@angular/core';
import { EndPoints } from './end-points';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {

    /**
     * @description: End-point clientes
     */
    public clientes = {
        url: {
            post: EndPoints.urlBase('clientes'),
            get: EndPoints.urlBase('clientes'),
        },
    }

    /**
     * @description: End-point operaciones
     */
    public operaciones = {
        url: {
            suscripciones: EndPoints.urlBase('suscripciones'),
            cancelaciones: EndPoints.urlBase('cancelaciones'),
            transacciones: EndPoints.urlBase('transacciones/'),
        },
    }

    /**
     * @description: End-point fondos
     */
    public fondos = {
        url: {
            post: EndPoints.urlBase('fondos'),
            get: EndPoints.urlBase('fondos'),
            getFondosCliente: EndPoints.urlBase('reportes/fondos-por-cliente?cedula='),
        },
    }






}