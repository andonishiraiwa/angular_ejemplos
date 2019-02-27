export class Color{

    private _nombre: string;
    private _codigo: string;

    constructor{
this._nombre=(nombre)?nombre : 'blanco';
this._nombre=(codigo)?codigo : '#FFF';

    }

   
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get codigo(): string {
        return this._codigo;
    }
    public set codigo(value: string) {
        this._codigo = value;
    }
}