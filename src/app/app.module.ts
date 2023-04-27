import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TorneosComponent } from './torneos/torneos.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthInterceptor } from './authInterceptor';
import { LigaComponent } from './liga/liga.component';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { ClasificacionComponent } from './clasificacion/clasificacion.component';
import {MatTableModule} from '@angular/material/table';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCreacionComponent } from './admin-creacion/admin-creacion.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';





@NgModule({
  declarations: [
    AppComponent,
    TorneosComponent,
    InicioComponent,
    LoginComponent,
    AdminPanelComponent,
    PerfilComponent,
    LigaComponent,
    ClasificacionComponent,
    AdminUsersComponent,
    AdminCreacionComponent,
    AdminSignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
