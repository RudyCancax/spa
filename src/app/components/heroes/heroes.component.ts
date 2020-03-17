import { Component, OnInit } from '@angular/core';

// Para las rutas
import { Router } from '@angular/router';

// Importamos el Servicio Creado
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];


  // Agregamos en el constructor el servicio importado, y creamos un router
  constructor( private heroesService: HeroesService,
               private router: Router ) {
    console.log('Constructor');
  }

  // Capturamos los datos del la función dentro del servicio, y lo asignamos a nuestra variable local
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);  // Imprimimos por consola el objeto
  }

  idHeroe( idx: number ) {
    console.log(idx);

    // Mandamos como en [routerLink] un arreglo, con la ruta base, y el index.
    this.router.navigate( ['/heroe', idx]);
  }
}
