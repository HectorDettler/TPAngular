import { Component, inject, OnInit } from '@angular/core';
import { Productos } from '../interface/productos';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { ProductosServiciosService } from '../services/productos.servicios.service';

@Component({
  selector: 'app-detalleproducto',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './detalleproducto.component.html',
  styleUrl: './detalleproducto.component.css'
})
export class DetalleproductoComponent implements OnInit{

  public producto!: Productos;
  loading: boolean = true;

  private _ruta = inject(ActivatedRoute);
  private _productoServicio= inject(ProductosServiciosService);

  ngOnInit(): void {
    this._ruta.params.subscribe(params =>{
      this._productoServicio.ObtenerproductoxID(params['productosID']).subscribe((data: Productos) =>{
        console.log(params['productosID'])
        console.log(data);
       this.producto = data;
        this.loading = false;
    });
  })
}



}
