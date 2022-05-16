import { Component, OnInit, ElementRef } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';

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
    { path: '/empleados/listar-empleado', title: 'Empleados', icon:'work', class:''},
    { path: '/empleados/ficha-empleado', title: 'Empleados', icon:'work', class:''},
    { path: '/perfil', title: 'Perfil',  icon: 'account_circle', class: '' },
    { path: '/configuracion', title: 'Configuracíon',  icon:'manage_accounts', class: '' },
    // { path: '/videoteca', title: 'Videoteca',  icon:'movie_creation', class: '' },
];
export const ROUTESTWO: RouteInfo[] = [
    { path: '/perfil', title: 'Perfil',  icon: 'account_circle', class: '' },
    { path: '/configuracion', title: 'Configuracíon',  icon:'manage_accounts', class: '' },
    // { path: '/videoteca', title: 'Videoteca',  icon:'movie_creation', class: '' },
];


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    menuItems: any[];
    private listTitles: any[];
    location: Location;
        mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location,  private element: ElementRef, private router: Router) {
        this.location = location;
            this.sidebarVisible = false;
    }

    ngOnInit(){
    this.menuItems = ROUTESTWO.filter(menuItem => menuItem);
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
        this.sidebarClose();
            var $layer: any = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                this.mobile_menu_visible = 0;
            }
        });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { //asign a function
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function() {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }
}
