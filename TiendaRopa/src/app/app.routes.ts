import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'productos', component: ProductosComponent},
    {path:'productos/:productosID',component: DetalleproductoComponent},
    {path:'**',redirectTo:''},
];
