import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarranavegacionComponent } from './barranavegacion/barranavegacion.component';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { FootComponent } from './foot/foot.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BarranavegacionComponent, CommonModule, ProductosComponent, FootComponent]
})
export class AppComponent {
  title = 'TiendaRopa';
}
