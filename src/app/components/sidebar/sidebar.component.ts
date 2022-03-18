import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'home', class: '' },
    { path: '/descargas', title: 'Descargas',  icon:'download', class: '' },
    { path: '/videoteca', title: 'Videoteca',  icon:'movie_creation', class: '' },
    // { path: '/clientes', title: 'Clientes',  icon:'people_outline', class: '' },
    { path: '/info_clientes/listar-cliente', title: 'Clientes',  icon:'people_outline', class: '' },
    { path: '/info_clientes/ficha-cliente', title: 'Clientes',  icon:'people_outline', class: '' },
    { path: '/prospectos', title: 'Prospectos',  icon:'person_search', class: '' },
    { path: '/tickets', title: 'Tickets',  icon:'local_activity', class: '' },
    { path: '/empleados/listar-empleado', title: 'Empleados', icon:'people_outline', class:''},
    { path: '/empleados/ficha-empleado', title: 'Empleados', icon:'people_outline', class:''},
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
