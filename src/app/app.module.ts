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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule }     from '@angular/material/card';
import { MatButtonModule }   from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // necesario para Material
import { LayoutModule } from '@angular/cdk/layout';                             // opcional para responsive
import { CatalogueComponent } from './components/catalogue/catalogue.component'; // <-- nueva importación

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavigationComponent,
    DashboardComponent,
    CatalogueComponent    // <-- nueva declaración
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule,
    LayoutModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }

// ← Aquí, ya declarada AppModule
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppModule),
    provideRouter(routes)
  ]
};

