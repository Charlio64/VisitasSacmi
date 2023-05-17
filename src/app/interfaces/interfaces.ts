export interface RespVisitas {
    success: boolean;
    data:    Visita[];
}

export interface Visita {
    entryNo:            number;
    salespersonCode:    string;
    subject:            string;
    description:        string;
    contactNo:          string;
    contactCompanyNo:   string;
    contactVia:         string;
    vendorName:         string;
    contactName:        string;
    contactCompanyName: string;
}

export interface RespContactos {
    success: boolean;
    data:    Contacto[];
}

export interface Contacto {
    code:      string;
    nombre:    string;
    direccion: string;
    ciudad:    string;
    provincia: string;
    telefono:  string;
    email:     string;
}

export interface RespVendedores {
    success: boolean;
    data:    Vendedor[];
}

export interface Vendedor {
    code:         string;
    nombre:       string;
    email:        string;
    departamento: string;
}

export interface RespTipoInt {
    success: boolean;
    data:    TipoInt[];
}

export interface TipoInt {
    code:        string;
    descripcion: string;
}



// ------------------------------------

// export interface User {
//     id:       number;
//     name:     string;
//     username: string;
//     email:    string;
//     address:  Address;
//     phone:    string;
//     website:  string;
//     company:  Company;
// }

// export interface Address {
//     street:  string;
//     suite:   string;
//     city:    string;
//     zipcode: string;
//     geo:     Geo;
// }

// export interface Geo {
//     lat: string;
//     lng: string;
// }

// export interface Company {
//     name:        string;
//     catchPhrase: string;
//     bs:          string;
// }





