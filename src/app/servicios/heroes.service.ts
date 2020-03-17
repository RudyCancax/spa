// Importamos la librería: Injectable
import { Injectable } from '@angular/core';

// Decorador de nuestro servicio
@Injectable()
export class HeroesService {
    constructor() {
        console.log('Servicio listo para usar!!!');
    }
}