import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barranavegacion',
  standalone: true,
  imports: [NgFor, CommonModule,RouterModule],
  templateUrl: './barranavegacion.component.html',
  styleUrl: './barranavegacion.component.css'
})
export class BarranavegacionComponent {

  rutas=[
    'home',
    'productos'
  ]

}
