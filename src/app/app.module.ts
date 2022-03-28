import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DescargasComponent } from './descargas/descargas.component';
import { VideotecaComponent } from './videoteca/videoteca.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { FichaEmpleadoComponent } from './empleados/ficha-empleado/ficha-empleado.component';
import { ListarEmpleadoComponent } from './empleados/listar-empleado/listar-empleado.component';
import { FichaClienteComponent } from './info_clientes/ficha-cliente/ficha-cliente.component';
import { ListarClienteComponent } from './info_clientes/listar-cliente/listar-cliente.component';
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { ListarComponent } from './tickets/listar/listar.component';
import { FichaComponent } from './tickets/ficha/ficha.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule, 
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ClipboardModule,
    NgbModule, 
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DescargasComponent,
    VideotecaComponent,
    ProspectosComponent,
    PerfilComponent,
    ConfiguracionComponent,
    FichaEmpleadoComponent,
    ListarEmpleadoComponent,
    FichaClienteComponent,
    ListarClienteComponent,
    LoginComponent,
    RecuperarPasswordComponent,
    ListarComponent,
    FichaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
