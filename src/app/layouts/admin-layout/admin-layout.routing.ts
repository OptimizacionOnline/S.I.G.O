import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DescargasComponent } from 'app/descargas/descargas.component';
import { VideotecaComponent } from 'app/videoteca/videoteca.component';
// import { ClientesComponent } from 'app/clientes/clientes.component';
import { ListarClienteComponent } from 'app/info_clientes/listar-cliente/listar-cliente.component';
import { FichaClienteComponent } from 'app/info_clientes/ficha-cliente/ficha-cliente.component';
import { ProspectosComponent } from 'app/prospectos/prospectos.component';
import { TicketsComponent } from 'app/tickets/tickets.component';
import { PerfilComponent } from 'app/perfil/perfil.component';
import { ConfiguracionComponent } from 'app/configuracion/configuracion.component';
import { ListarEmpleadoComponent } from 'app/empleados/listar-empleado/listar-empleado.component';
import { FichaEmpleadoComponent } from 'app/empleados/ficha-empleado/ficha-empleado.component';
import { LoginComponent } from 'app/login/login.component';
import { RecuperarPasswordComponent } from 'app/recuperar-password/recuperar-password.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'descargas',      component: DescargasComponent },
    { path: 'videoteca',      component: VideotecaComponent},
    // { path: 'clientes',       component: ClientesComponent},
    { path: 'info_clientes/listar-cliente',       component: ListarClienteComponent},
    { path: 'info_clientes/ficha-cliente',       component: FichaClienteComponent},
    { path: 'prospectos',     component: ProspectosComponent},
    { path: 'tickets',        component: TicketsComponent},
    { path: 'perfil',         component: PerfilComponent},
    { path: 'configuracion',  component: ConfiguracionComponent},
    { path: 'empleados/listar-empleado',  component: ListarEmpleadoComponent},
    { path: 'empleados/ficha-empleado',  component: FichaEmpleadoComponent},
    { path: 'login', component: LoginComponent },
    { path: 'get-password', component: RecuperarPasswordComponent },

];
