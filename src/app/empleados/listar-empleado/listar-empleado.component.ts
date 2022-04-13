import { Component} from '@angular/core';

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
        Email: "victorio.molina@optimizacion-online.com",
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
    }
    ]

    interface NoEmpleados {
    Num?: number;
    Nombre: string;
    Email: string;
    Departamento: string;
    Oficina: string;
    }
    const NOEMPLEADO: NoEmpleados[] = [
    {
        Nombre: "Linda Elena Landis Peña",
        Email: "elena.landis@optimizacion-online.com",
        Departamento: "Asistente de direccion general",
        Oficina: "Leon"
    },
    {
        Nombre: "Jacqueline Villalpando Villegas",
        Email: "jacqueline@optimizacion-online.com",
        Departamento: "Asistente de direccion general",
        Oficina: "Leon"
    },
    {
        Nombre: "Moises C A",
        Email: "moises.optimizacion@gmail.com",
        Departamento: "Auditorias SEO",
        Oficina: "Ciudad de Mexico"
    },
    {
        Nombre: "Alejandra Luna Hilario",
        Email: "alejandra.luna@optimizacion-online.com",
        Departamento: "Becarios",
        Oficina: "Cordoba"
    },
    {
        Nombre: "Jair Sanchez Rivera",
        Email: "jair.sanchez@optimizacion-online.com",
        Departamento: "Becarios",
        Oficina: "Cordoba"
    },
    {
        Nombre: "Demo Demo",
        Email: "demo@demo.com",
        Departamento: "CEO",
        Oficina: "Puebla"
    },
    {
        Nombre: "Carlos Gilberto Meléndez Monárrez",
        Email: "carlos.meledez@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Coatzacoalcos"
    },
    {
        Nombre: "Ximena Herrera Gomez",
        Email: "ximena.herrera@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Aguascalientes"
    },
    {
        Nombre: "Maria Elena Gomez Gonzalez",
        Email: "maria.gomez@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Puebla"
    },
    {
        Nombre: "Laura Damaris Colunga Grajeda",
        Email: "laura.colunga@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Leon"
    },
    {
        Nombre: "Thalia Aguirre Marron",
        Email: "thalia.aguirre@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Leon"
    },
    {
        Nombre: "Sofia Lopez Sanchez",
        Email: "sofia.loppez@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Guadalajara"
    },
    {
        Nombre: "Mario Cardenas Garcia",
        Email: "mario.cardenas@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Ciudad de Mexico"
    },
    {
        Nombre: "Jam Jairo Sanguinetii López",
        Email: "jam.sanguinetii@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Colombia"
    },
    {
        Nombre: "Abraham de Jesus Reyes Arambula",
        Email: "abraham.reyes@optimizacion-online.com",
        Departamento: "Consultor de marketing digital",
        Oficina: "Guadalajara"
    }
    ]

    @Component({
    selector: 'app-listar-empleado',
    templateUrl: './listar-empleado.component.html',
    styleUrls: ['./listar-empleado.component.scss']
    })

    export class ListarEmpleadoComponent{
    page1 = 1;
    pageSize1 = 10;
    collectionSize1 = EMPLEADO.length;
    empleados: Empleados[];
    page2 = 1;
    pageSize2 = 10;
    collectionSize2 = NOEMPLEADO.length;
    noempleados: NoEmpleados[];

    constructor() {
        this.refreshEmpleados();
        this.refreshNoEmpleados();
    }

    refreshEmpleados() {
        this.empleados = EMPLEADO
        .map((empleados, i) => ({Num: i + 1, ...empleados}))
        .slice((this.page1 - 1) * this.pageSize1, (this.page1 - 1) * this.pageSize1 + this.pageSize1);
    }

    refreshNoEmpleados() {
        this.noempleados = NOEMPLEADO
        .map((noempleados, i) => ({Num: i + 1, ...noempleados}))
        .slice((this.page2 - 1) * this.pageSize2, (this.page2 - 1) * this.pageSize2 + this.pageSize2);
    }
}
