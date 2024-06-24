import { Component, inject,Input } from '@angular/core';
import { Productos } from '../interface/productos';
import { CurrencyPipe,SlicePipe,CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { DetalleproductoComponent } from '../detalleproducto/detalleproducto.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe,SlicePipe,CommonModule,DetalleproductoComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  private _router= inject(Router)

  @Input() products!: Productos;

  VerMas(id:number)
  {
    this._router.navigate(['/productos', id])
  }

}
