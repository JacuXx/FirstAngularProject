// src/app/components/product/product.component.ts

// Le agregamos el decorador Input para indicarle a un 
// componente que puede recibir un valor desde el componente padre
import { Component, Input } from '@angular/core';

// Importamos nuestro Modelo
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  /** Esperamos recibir un objeto Product (interface) y lo almacenamos en product */
  @Input() product!: Product;
}
