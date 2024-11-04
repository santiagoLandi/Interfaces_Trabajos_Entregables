class Juego {

    constructor(jugador, context, posInicialX, posInicialY, imagen) {
        this.jugador = jugador;        
        this.context = context;
        this.posInicialX = posInicialX;
        this.posInicialY = posInicialY;
        this.posCanvasX = this.posInicialX;
        this.posCanvasY = this.posInicialY;
        this.imagen = imagen;
    }

    //Posicion inicial de la ficha
    setPosicionInicial(x, y) {
        this.posInicialX = x;
        this.posInicialY = y;
    }

    getPosInicialX() {
        return this.posInicialX;
    }

    getPosInicialY() {
        return this.posInicialY;
    }

    //Posicion actual del objeto en la pagina
    setPosicionCanvas(x, y) {
        this.posCanvasX = x;
        this.posCanvasY = y;
    }

    getPosCanvasX() {
        return this.posCanvasX;
    }

    getPosCanvasY() {
        return this.posCanvasY;
    }

    getImagen() {
        return this.imagen;
    }

    getJugador() {
        return this.jugador;
    }

    draw() {
    }


}