import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Productos, Resultado } from '../interface/productos';
import { ProductosServiciosService } from '../services/productos.servicios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnInit{

  productos: Productos[]=[];
  
  
  private _productosServicios=inject (ProductosServiciosService);

  ngOnInit(): void {
    this._productosServicios.Obtenerproducto().subscribe((data: Productos[])=>{
      this.productos=data;
    });
  }

  

  


}

