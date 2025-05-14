// src/app/app.module.ts
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { ProductComponent }     from './components/product/product.component';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';  // ← importProvidersFrom
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ← Aquí, ya declarada AppModule
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppModule),
    provideRouter(routes)
  ]
};

