import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespVisitas, RespContactos, RespVendedores, RespTipoInt } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  
  constructor(private http: HttpClient) { }  

  getVisitas() {

    return this.http.get<RespVisitas>(URL + 'bc14/visitas');
  }

  getContactos() {

    return this.http.get<RespContactos>(URL + 'bc14/contactos');
  }

  getVendedores() {

    return this.http.get<RespVendedores>(URL + 'bc14/vendedores');
  }

  getTipoInt() {

    return this.http.get<RespTipoInt>(URL + 'bc14/tipoint');
  }  


  // ---------------------
  

  getUsuarios() {

    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUsuario(id: number) {

    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }


}
