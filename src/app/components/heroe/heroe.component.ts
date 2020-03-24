import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
// Para las rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  // Variable local que se utilizará para mostrar en el template
  heroe: any = {};

  // Importamos el Servicio
  constructor( private activatedRoute: ActivatedRoute,
               private heroeService: HeroesService,
               private router: Router
               ) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);

      // Se hace referencia al servicio y obtenemos el id del héroe seleccionado
      this.heroe = this.heroeService.getHeroe( params[ 'id' ] );
    });
  }

  regresaHeroes() {
    console.log();
    // Mandamos como en [routerLink] un arreglo, con la ruta base, y el index.
    this.router.navigate(['/heroes']);
  }
}
