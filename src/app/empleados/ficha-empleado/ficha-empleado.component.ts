import { Component } from '@angular/core';

interface Proyectos {
  Num?: number;
  Dominio: string;
}

interface Prospectos {
  Num?: number;
  Dominio: string;
}

const PROYECTO: Proyectos[] = [
  {Dominio: "montacargasventayrenta.com"},
  {Dominio: "http://animaltraining.com.mx/"},
  {Dominio: "www.voxpop.com.mx"},
  {Dominio: "http://cirugiaplasticaenleon.com"},
  {Dominio: "drdavidfernandez.com"},
  {Dominio: "www.optimizacion-online.co"},
  {Dominio: "http://abilita.com.mx/"},
  {Dominio: "www.cosasinteligentes.co/"},
  {Dominio: "centraldedatos.com/"},
  {Dominio: "www.marmolesmaga.com.mx"},
  {Dominio: "http://neurocirugiadrcamacho.com"},
  {Dominio: "www.byasa.com.mx"},
  {Dominio: "codigouno.com.mx"},
  {Dominio: "www.extrememoverspty.com"},
  {Dominio: "www.camarashorus.com"},
]

const PROSPECTO: Prospectos[] = [
  {Dominio: "web.zenttre.mx"},
  {Dominio: "www.tecnovoltio.com"},
  {Dominio: "www.ensa.com.mx"},
  {Dominio: "www.easypack.mx"},
  {Dominio: "www.euromexpol.com"},
  {Dominio: "www.automaticatech.com"},
  {Dominio: "www.polimex.mx"},
  {Dominio: "www.sinube.mx"},
  {Dominio: "www.san-son.com"},
  {Dominio: "www.ipc.com.mx"},
  {Dominio: "www.reyco-acero.com/"},
  {Dominio: "www.rimsamex.com"},
  {Dominio: "www.missionatm.com"},
  {Dominio: "www.praim.mx"},
  {Dominio: "www.euromexpol.com"},
]

@Component({
  selector: 'app-ficha-empleado',
  templateUrl: './ficha-empleado.component.html',
  styleUrls: ['./ficha-empleado.component.scss']
})
export class FichaEmpleadoComponent{
    page1 = 1;
    pageSize1 = 5;
    collectionSize1 = PROYECTO.length;
    proyectos: Proyectos[];
    page2 = 1;
    pageSize2 = 5;
    collectionSize2 = PROSPECTO.length;
    prospectos: Prospectos[];

    constructor() {
        this.refreshProyectos();
        this.refreshProspectos();
    }

    refreshProyectos() {
        this.proyectos = PROYECTO
        .map((proyectos, i) => ({Num: i + 1, ...proyectos}))
        .slice((this.page1 - 1) * this.pageSize1, (this.page1 - 1) * this.pageSize1 + this.pageSize1);
    }

    refreshProspectos() {
      this.prospectos = PROSPECTO
      .map((proyectos, i) => ({Num: i + 1, ...proyectos}))
      .slice((this.page2 - 1) * this.pageSize2, (this.page2 - 1) * this.pageSize2 + this.pageSize2);
  }
}
