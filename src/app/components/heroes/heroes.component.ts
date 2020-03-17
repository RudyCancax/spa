import { Component, OnInit } from '@angular/core';

// Importamos el Servicio Creado
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  // Agregamos en el constructor el servicio importado
  constructor( private heroesService: HeroesService ) {

  }

  ngOnInit(): void {
  }

  nombre = "Joel Cancax (Alias: Batman)";
}
