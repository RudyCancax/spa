import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  // Variable local que se utilizará para mostrar en el template
  heroe: any = {};

  // Importamos el Servicio
  constructor( private activatedRoute: ActivatedRoute,
               private heroeService:   HeroesService
               ) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);

      // Se hace referencia al servicio y obtenemos el id del héroe seleccionado
      this.heroe = this.heroeService.getHeroe( params[ 'id' ] );
    });
  }

  ngOnInit(): void {
  }

}
