// src/app/app.component.ts

import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CONSUMO DE UNA API DESDE ANGULAR';

  /** Inyectamos HttpClient vía función inject() */
  private http = inject(HttpClient);

  /** Aquí guardaremos el listado de productos que trae la API */
  products: Product[] = [];

  /** URL de la API a consumir */
  readonly url_api = 'https://fakestoreapi.com/products';

  /** Se dispara al inicializar el componente */
  ngOnInit(): void {
    alert('¡Bienvenido!');
    this.loadProducts();
  }

  /** Carga los productos desde la API y los asigna a this.products */
  loadProducts(): void {
    this.http
      .get<Product[]>(this.url_api)
      .subscribe((data) => {
        this.products = data;
      });
  }
}
