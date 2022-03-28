import { Component, OnInit } from '@angular/core';

interface Empleados {
  Num?: number;
  Nombre: string;
  Email: string;
  Departamento: string;
  Oficina: string;
  Rol:string;
}
const EMPLEADO: Empleados[] = [
  {
      Nombre: "Maria Fernanda Mercado Garcia",
      Email: "fernanda.mercado@optimizacion-online.com",
      Departamento: "Asistente de direccion general",
      Oficina: "Leon",
      Rol: "Usuario final"
  },
  {
      Nombre: "Josselyn Sarahi Nepomuceno",
      Email: "josselyn.nepomuceno@optimizacion-online.com",
      Departamento: "Becarios",
      Oficina: "Cordoba",
      Rol: "Usuario final"
  },
  {
      Nombre: "Guadalupe Chacon Acosta",
      Email: "guadalupe.chacon@optimizacion-online.com",
      Departamento: "Becarios",
      Oficina: "Cordoba",
      Rol: "Usuario final"
  },
  {
      Nombre: "Viviana Velasco Montero",
      Email: "viviana.velasco@optimizacion-online.com",
      Departamento: "Becarios",
      Oficina: "Cordoba",
      Rol: "Usuario final"
  },
  {
      Nombre: "Emmanuel Garcia Solis",
      Email: "emmanuel.garcia@optimizacion-online.com",
      Departamento: "Becarios",
      Oficina: "Cordoba",
      Rol: "Usuario final"
  },
  {
      Nombre: "Isai Lopez Fuentes",
      Email: "isai.lopez@optimizacion-online.com",
      Departamento: "Becarios",
      Oficina: "Cordoba",
      Rol: "Usuario final"
  },
  {
      Nombre: "Raul Rios Conde",
      Email: "raul@optimizacion-online.com",
      Departamento: "CEO",
      Oficina: "Leon",
      Rol: "Usuario final"
  },
  {
      Nombre: "Natalia Daniela Sanchez Garcia",
      Email: "daniela.garcia@optimizacion-online.com",
      Departamento: "Consultor de marketing digital",
      Oficina: "Colombia",
      Rol: "Usuario final"
  },
  {
      Nombre: "Flor Noemi Fernandez Ceron",
      Email: "noemi.fernandez@optimizacion-online.com",
      Departamento: "Consultor de marketing digital",
      Oficina: "Ciudad de Mexico",
      Rol: "Usuario final"
  },
  {
      Nombre: "Irian Valeria Perez Romero",
      Email: "irian.perez@optimizacion-online.com",
      Departamento: "Consultor de marketing digital",
      Oficina: "Ciudad de Mexico",
      Rol: "Usuario final"
  },
  {
      Nombre: "Victorio Maniel Molina",
      Email: "visctorio.molina@optimizacion-online.com",
      Departamento: "Consultor de marketing digital",
      Oficina: "Argentina",
      Rol: "Usuario final"
  },
  {
      Nombre: "Emmy Julissa Enriquez Salazar",
      Email: "emmy.enriquez@optimizacion-online.com",
      Departamento: "Consultor de marketing digital",
      Oficina: "Merida",
      Rol: "Usuario final"
  },
  {
      Nombre: "Vanessa Alexandra Garcia Machado",
      Email: "vanessa.garcia@optimizacion-online.com",
      Departamento: "Consultor de marketing digital",
      Oficina: "Costa Rica",
      Rol: "Usuario final"
  },
  {
      Nombre: "Mariana Rueda Loyo",
      Email: "mariana.rueda@optimizacion-online.com",
      Departamento: "Consultor de marketing digital",
      Oficina: "Cordoba",
      Rol: "Usuario final"
  },
  {
      Nombre: "Isabel Juarez Camarillo",
      Email: "isabel.juarez@optimizacion-online.com",
      Departamento: "Consultor de marketing digital",
      Oficina: "Guadalajara",
      Rol: "Usuario final"
  },
]

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.scss']
})
export class ListarEmpleadoComponent{

  page = 1;
  pageSize = 5;
  collectionSize = EMPLEADO.length;
  empleados: Empleados[];

  constructor() {
    this.refreshEmpleados();
  }

  refreshEmpleados() {
    this.empleados = EMPLEADO
      .map((empleados, i) => ({Num: i + 1, ...empleados}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  // ngOnInit(): void {
  // }

}
