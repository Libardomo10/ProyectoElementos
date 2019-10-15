export interface Session {
    id: number;
    nombre: string;
    apellido: string;
    idUniversidad: number;
    nombreUsuario: string;
    contrasenia: string;
    idRolFK: number;
}