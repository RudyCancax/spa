import { Component, OnInit } from '@angular/core';

// Importamos el Servicio Creado
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];


  // Agregamos en el constructor el servicio importado
  constructor( private heroesService: HeroesService ) {
    console.log('Constructor');
  }

  // Capturamos los datos del la función dentro del servicio, y lo asignamos a nuestra variable local
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);  // Imprimimos por consola el objeto
  }
}
