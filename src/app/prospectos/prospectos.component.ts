import { Component, OnInit } from '@angular/core';

interface Prospectos {
  Num?: number;
  Empresa: string;
  Dominio: string;
  Contacto: string;
  Consultor: string;
  Fuente: string;
}

const PROSPECTO: Prospectos[] = [
  {
    Empresa: "Casr Fast",
    Dominio: "http://www.carfast.mx/",
    Contacto: "Nazareth Black",
    Consultor: "Pedro Vargas Corrales",
    Fuente: "ADWORDS"
  },
  {
    Empresa: "SHABOT CARPETS",
    Dominio: "www.shabotcarpets.com.mx",
    Contacto: "Abraham Shabot/Moises Shabot",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "ADWORDS"
  },
  {
    Empresa: "E-Nature",
    Dominio: "www.e-nature.com.mx",
    Contacto: "Areli Hernandez",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "OTROS"
  },
  {
    Empresa: "Grupo Gardi",
    Dominio: "www.mallascercasyalambrados.com.mx",
    Contacto: "Arq. Alejandra Angeles",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "OTROS"
  },
  {
    Empresa: "Alpro Shop",
    Dominio: "www.alproshop.com",
    Contacto: "Arq. Catalina Maldonado",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "ADWORDS"
  },
  {
    Empresa: "Akasha Mexico",
    Dominio: "www.akashamexico.com",
    Contacto: "Asdrubal Mendizabal Espinoza",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "COLD CALLING"
  },
  {
    Empresa: "Sirio Ribbons",
    Dominio: "www.sirioribbons.com",
    Contacto: "Beatriz Moreno",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "ADWORDS"
  },
  {
    Empresa: "LASAB",
    Dominio: "www.lavadodesalas.mx",
    Contacto: "Carlos Campos",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "ADWORDS"
  },
  {
    Empresa: "Mexico Luxury Properties",
    Dominio: "www.mexicoluxuryproperties.com",
    Contacto: "Carlos Dumont",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "OTROS"
  },
  {
    Empresa: "SHABOT CARPETS",
    Dominio: "www.shabotcarpets.com.mx",
    Contacto: "Abraham Shabot/Moises Shabot",
    Consultor: "Ana Luisa López Ramírez",
    Fuente: "ADWORDS"
  },
]

@Component({
  selector: 'app-prospectos',
  templateUrl: './prospectos.component.html',
  styleUrls: ['./prospectos.component.scss']
})
export class ProspectosComponent {

    page = 1;
    pageSize = 5;
    collectionSize = PROSPECTO.length;
    prospectos: Prospectos[];

    constructor() {
      this.refreshProspectos();
    }

    refreshProspectos() {
      this.prospectos = PROSPECTO
        .map((prospectos, i) => ({Num: i + 1, ...prospectos}))
        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
  //ngOnInit(): void {
  //}
}