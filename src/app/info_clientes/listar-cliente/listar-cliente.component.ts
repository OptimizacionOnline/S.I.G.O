import { Component, OnInit } from '@angular/core';

interface Clientes {
  Num?: number;
  Dominio: string;
  UltimoContenido: String;
  UltimoPago: String;
  Region: string;
}

const CLIENTE: Clientes[] = [
  {
    Dominio: "www.promesasdevida.com.mx",
    UltimoContenido: "2022-02-14",
    UltimoPago: "2021-11-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "www.wibo.mx",
    UltimoContenido: "2022-03-14",
    UltimoPago: "2021-12-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "www.spulindustrial.com.mx",
    UltimoContenido: "2022-02-10",
    UltimoPago: "2021-11-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "biera.com.mx/",
    UltimoContenido: "2022-02-14",
    UltimoPago: "2022-01-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "conectix.com/",
    UltimoContenido: "2022-02-14",
    UltimoPago: "2022-02-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "www.rayssa.cl/",
    UltimoContenido: "2022-01-25",
    UltimoPago: "2021-12-30",
    Region: "Chile"
  },
  {
    Dominio: "www.cuatrorios.cl",
    UltimoContenido: "2021-12-25",
    UltimoPago: "2021-11-30",
    Region: "Chile"
  },
  {
    Dominio: "royalpro.cl/",
    UltimoContenido: "2021-12-20",
    UltimoPago: "2021-02-30",
    Region: "Chile"
  },
  {
    Dominio: "www.thephonehouse.cl",
    UltimoContenido: "2022-01-20",
    UltimoPago: "2021-11-30",
    Region: "Chile"
  },
  {
    Dominio: "www.bellapiel.cl",
    UltimoContenido: "2021-12-20",
    UltimoPago: "2021-01-30",
    Region: "Chile"
  },
  {
    Dominio: "www.izytech.com/",
    UltimoContenido: "2021-12-25",
    UltimoPago: "2021-03-15",
    Region: "Chile"
  },
  {
    Dominio: "www.rwautomatizacion.cl/",
    UltimoContenido: "2021-12-01",
    UltimoPago: "2021-03-01",
    Region: "Chile"
  },
  {
    Dominio: "www.mx.izytech.com/",
    UltimoContenido: "2021-11-28",
    UltimoPago: "2022-01-01",
    Region: "Chile"
  },
  {
    Dominio: "cgcweb.cl/",
    UltimoContenido: "2021-12-05",
    UltimoPago: "2022-02-01",
    Region: "Chile"
  },
  {
    Dominio: "esencialshop.cl/",
    UltimoContenido: "2022-01-24",
    UltimoPago: "2022-02-24",
    Region: "Chile"
  }
]

interface NoClientes {
  Num?: number;
  Dominio: string;
  UltimoContenido: String;
  UltimoPago: String;
  Region: string;
}

const NOCLIENTE: NoClientes[] = [
  {
    Dominio: "https://www.elcaneloautopartes.com.mx",
    UltimoContenido: "2022-02-14",
    UltimoPago: "2021-11-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://www.bocapi-muebles.com",
    UltimoContenido: "2022-03-14",
    UltimoPago: "2021-12-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://www.lacreperia.mx/",
    UltimoContenido: "2022-02-10",
    UltimoPago: "2021-11-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://cerrito.com.mx/",
    UltimoContenido: "2022-02-14",
    UltimoPago: "2022-01-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://www.plasma-digital.com.mx/",
    UltimoContenido: "2022-02-14",
    UltimoPago: "2022-02-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://dvigna.com.mx/",
    UltimoContenido: "2022-01-25",
    UltimoPago: "2021-12-30",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://duelencino.com/",
    UltimoContenido: "2021-12-25",
    UltimoPago: "2021-11-30",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://anuncioslumicolor.com/",
    UltimoContenido: "2021-12-20",
    UltimoPago: "2021-02-30",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://monteolimpo.mx/",
    UltimoContenido: "2022-01-20",
    UltimoPago: "2021-11-30",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://www.mueblesnovajerez.com/",
    UltimoContenido: "2021-12-20",
    UltimoPago: "2021-01-30",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://www.piochicken.mx/",
    UltimoContenido: "2021-12-25",
    UltimoPago: "2021-03-15",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://gruposancristobal.com.mx/",
    UltimoContenido: "2021-12-01",
    UltimoPago: "2021-03-01",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://wibo.mx/",
    UltimoContenido: "2021-11-28",
    UltimoPago: "2022-01-01",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://www.gruposancristobal.com.mx",
    UltimoContenido: "2021-12-05",
    UltimoPago: "2022-02-01",
    Region: "Aguascalientes"
  },
  {
    Dominio: "http://www.hotelcasadeljardin.com/",
    UltimoContenido: "2022-01-24",
    UltimoPago: "2022-02-24",
    Region: "Aguascalientes"
  }
]

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})

export class ListarClienteComponent{
  page = 1;
  pageSize = 10;
  collectionSize1 = CLIENTE.length;
  clientes: Clientes[];
  collectionSize2 = NOCLIENTE.length;
  noclientes: NoClientes[];

  constructor() {
    this.refreshClientes();
    this.refreshNoClientes();
  }

  refreshClientes() {
    this.clientes = CLIENTE
    .map((clientes, i) => ({Num: i + 1, ...clientes}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

refreshNoClientes() {
  this.noclientes = NOCLIENTE
  .map((noclientes, i) => ({Num: i + 1, ...noclientes}))
  .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
}

}
