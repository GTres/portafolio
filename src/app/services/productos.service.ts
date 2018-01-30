import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;
  productos_filtrado:any[] = [];

  constructor( private http:Http ) {

    this.cargar_productos();

  }



  public buscar_producto(termino: string){ 


    if(this.productos.length === 0){
      this.cargar_productos().then(()=>{
        // Termino la carga 
        this.filtrar_productos(termino);
        // console.log('Buscando producto');
        // console.log(this.productos_filtrado.length);
      });
    }
    else{
      this.filtrar_productos(termino);
      // console.log('Buscando producto');
      // console.log(this.productos_filtrado.length);
    }
  
  }



  private filtrar_productos(termino:string){
    
    this.productos_filtrado =  [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      if(prod.categoria.toLowerCase().indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >=0 ){
        this.productos_filtrado.push(prod);
        // console.log(prod);
      }
    });

  }



  public cargar_productos(){
    this.cargando = true;
    let promesa = new Promise((resolve, reject) => {

      this.http.get("https://paginawebguillo.firebaseio.com/productos_idx.json").subscribe(
        respuesta => { 
          this.cargando = false;
          this.productos = respuesta.json();
          resolve();
        });
    
    });
    return promesa;
  }


  public cargar_producto(cod:string){
     return this.http.get(`https://paginawebguillo.firebaseio.com/productos/${cod}.json`);
  }

}
