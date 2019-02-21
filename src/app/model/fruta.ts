const IMAGEN_DEFAULT = 'https://image.freepik.com/vector-gratis/lema-pina-sandia_41984-19.jpg';

 
export class Fruta {

    //atributos privador y comienzan con guines bajos
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _precio: number;
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    private _oferta: boolean;
    public get oferta(): boolean {
        return this._oferta;
    }
    public set oferta(value: boolean) {
        this._oferta = value;
    }
    private _descuento: number;
    public get descuento(): number {
        return this._descuento;
    }
    public set descuento(value: number) {
        this._descuento = value;
    }
    private _imagen: string;
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    private _cantidad: number;
    public get cantidad(): number {
        return this._cantidad;
    }
    public set cantidad(value: number) {
        this._cantidad = value;
    }
    
    //constructor (solo puede haber 1 y no existe sobrecarga)
    //usaremos parametros con '?' para los opcionales
    /**
     * nombre y precio son obligatorios
     * @param nombre 
     * @param precio 
     * @param id? -1
     * @param oferta? false
     * @param descuento? 0
     * @param imagen? const IMAGEN_DEFAULT
     * @param cantidad=0
     */



    constructor(nombre: string, precio: number, id?: number, oferta = false, descuento?: number, imagen?: string, cantidad?:number){
        this._nombre = nombre;
        this._precio = precio;
        this._id = (id) ? id : -1;
        this._oferta = oferta;
        this._descuento = (descuento) ? descuento : 0;
        this._imagen = (imagen) ? imagen : IMAGEN_DEFAULT;
        this._cantidad=(cantidad) ? cantidad:0;
    }

    //getters y setters

   
}
