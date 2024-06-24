import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos, Resultado } from '../interface/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiciosService {

  private urlApi='https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }


  Obtenerproducto():Observable<Productos[]>{
    return this.http.get<Productos[]>(this.urlApi);

  }

  ObtenerproductoxID(id:number):Observable<any>{
    return this.http.get<Productos>(`${this.urlApi}?linkTo=id_producto&equalTo=${id}`);
  }

  Obtenerproductoxnombre(name:string)
  {
    return this.http.get(`${this.urlApi}?linkTo=nombre_producto&equalTo=${name}`)
  }



}
