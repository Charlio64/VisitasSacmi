import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespVisitas, RespContactos, RespVendedores, RespTipoInt } from '../interfaces/interfaces';

const url = environment.url;
const apiKey = environment.apiKey;
const header = new HttpHeaders().set('visitas-api-key', apiKey);

@Injectable({
  providedIn: 'root'
})

export class DataService {

  
  constructor(private http: HttpClient) { }  

  // GET

  getVisitas() {
    return this.http.get<RespVisitas>(url + 'visitas', { headers: header });
  }

  getContactos() {
    return this.http.get<RespContactos>(url + 'contactos', { headers: header });
  }

  getVendedores() {
    return this.http.get<RespVendedores>(url + 'vendedores', { headers: header });
  }

  getTipoInt() {
    return this.http.get<RespTipoInt>(url + 'tipoint', { headers: header });
  }  

  // POST

  // TODO


  // ---------------------
  

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUsuario(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }


}
