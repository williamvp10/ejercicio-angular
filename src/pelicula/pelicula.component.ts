import { Component, OnInit } from '@angular/core';
import { Pelicula } from './pelicula';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  peliculas2 : Array<Pelicula> = []
  peliculas = [
    {
      'nombre': "El apostador",
      'descripcion': "El profesor de literatura Jim Bennett lleva una vida secreta como jugador de apuestas fuertes. Siempre se arriesga y le pide dinero prestado a un gánster. Se enfrenta a su acreedor contra el operador de una red de juego ilegal mientras llama la atención de Frank, un usurero paternalista. Mientras la relación con una estudiante se profundiza, Bennett debe arriesgar todo por una segunda oportunidad.",
      'imagen': "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/1454_173x256.jpg"
    }, {
      'nombre': "Agente bajo fuego",
      'descripcion': "Tras unos acontecimientos del pasado, el agente Mike Banning es acusado de tratar de asesinar al presidente de los Estados Unidos. Sin embargo Banning consigue escapar de su agencia y del FBI, y se ve envuelto en una carrera contrarreloj. Su misión es descubrir al grupo terrorista que tiene el Air Force One en el punto de mira.",
      'imagen': "https://www.ecartelera.com.mx/carteles/12300/12390/003.jpg"
    }, {
      'nombre': "Avengers: Endgame",
      'descripcion': "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
      'imagen': "https://tecreview.tec.mx/wp-content/uploads/2019/04/avengers-696x555.jpg"
    }, {
      'nombre': "Pantera Negra",
      'descripcion': "Después de morir su padre, T'Challa regresa a su nación, Wakanda. Una vez allí, descubre que tiene un nuevo y terrible enemigo, y T'Challa asume la personalidad de Pantera Negra para salvar no solo al reino de Wakanda, sino a toda la humanidad.",
      'imagen': "https://i.blogs.es/30cb7a/blackpanther5/1366_2000.jpg"
    }, {
      'nombre': "Ride Along 2",
      'descripcion': "El policía novato Ben Barber desea volverse detective, lo mismo que James Payton, su futuro cuñado. Reacio, James lleva a Ben a Miami en busca de pistas sobre un cartel de drogas. Durante a la investigación, ellos encuentran evidencias que implican a un respetado empresario. Les toca a ellos probar que el ejecutivo carismático, Antonio Papa, es un violento capo que comanda el tráfico de drogas en el sur de Florida.",
      'imagen': "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGX0DCXK8/image?locale=es-us&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg"
    }
  ]

  constructor() {
    for (let i = 0; i < this.peliculas.length; i++) {
      var nombre = this.peliculas[i].nombre
      var des = this.peliculas[i].descripcion
      var im = this.peliculas[i].imagen 
      var pel=new Pelicula(nombre, des, im)
      this.peliculas2.push(pel);
    }
  }

  ngOnInit() {
    
  }

}