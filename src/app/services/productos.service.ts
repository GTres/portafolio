import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor( private http:Http ) {

    this.cargar_productos();

  }

  public cargar_productos(){
    this.cargando = true;
    this.http.get("https://paginawebguillo.firebaseio.com/productos_idx.json").subscribe(
      respuesta => { 
        console.log(respuesta.json()); 
        this.cargando = false;
        this.productos = respuesta.json();
      });
  }

}
