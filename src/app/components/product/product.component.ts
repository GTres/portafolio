import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent {

  producto:any = undefined;
  codigo:string = "";
  constructor(
              private route:ActivatedRoute,
              private _ps:ProductosService) {

    route.params.subscribe(parametros=>{
      // console.log(parametros);
      // console.log(parametros['id']);
      _ps.cargar_producto(parametros['id']).subscribe(respuesta=> {
        this.producto = respuesta.json();
        this.codigo = parametros['id'];
        console.log( this.producto );
      });
    });
  }


}
