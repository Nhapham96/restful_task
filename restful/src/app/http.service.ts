import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getPokemon();
   }

getTasks() {
  // our http response is an Observable, store it in a variable
  const tempObservable = this._http.get('/tasks');
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  tempObservable.subscribe(data => console.log('Got our tasks!', data));
}
getPokemon() {
  const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  bulbasaur.subscribe(data => console.log(data));
  bulbasaur.subscribe(data => {for (const i of data['abilities']) {console.log(i.ability.name); }});
  const allpokes = this._http.get('https://pokeapi.co/api/v2/ability/immunity/');
     allpokes.subscribe(data => {for (const i of data['pokemon']) {console.log(i.pokemon['name']); }} );

}

}

