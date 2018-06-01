import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas : any [] = [];

  urlBusqueda: string = "https://api.spotify.com/v1/search?";

  constructor(private hhtp: Http) { }

  getArtistas (termino :string){
      let query = `q=${termino}&type=artist`;
      let url = this.urlBusqueda + query;

      return this.hhtp.get(url).map(res => {
        console.log(res);
      })

  }

}
