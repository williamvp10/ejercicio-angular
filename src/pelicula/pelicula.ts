export class Pelicula {
  nombre: string;
  descripcion: string;
  url: string;
  
  constructor(nom:string, des:string, url:string){
    this.nombre=nom;
    this.descripcion=des;
    this.url=url;
  }
 
}