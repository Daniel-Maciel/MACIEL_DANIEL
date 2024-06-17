class vehiculo {

    constructor (marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;

    }
    obtenerInformacion() {
        documento.write(
            `Marca ${this.marca} Modelo ${this.modelo} Año ${this.año}`
        );
                    
    }
}

class Automovil extends vehiculo () {
    color;
    precio;
    
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }
    obtenerInformacion() {
        super.obtenerInformacion();
        console.log(`Color: ${this.color}, Precio: ${this.precio}`);
    
    }

}
const vehiculo_guardado = new vehiculo("Fiat", "Palio", 200);
const automovil_Nuevo = new Automovil("Fiat", "Palio", 2010, "Rojo", "$10,000,000");

// Mostrar información en la consola
console.log("Información del Vehículo Guardado:");
vehiculo_guardado.obtenerInformacion();

console.log("Información del Automóvil Nuevo:");
automovil_Nuevo.obtenerInformacion();

