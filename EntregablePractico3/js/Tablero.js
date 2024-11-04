class Tablero extends Juego {

    constructor(jugador, context, posInicialX, posInicialY, imagen, longitudX, longitudY) {
        super(jugador, context, posInicialX, posInicialY, imagen);
        
        this.longitudX = longitudX;        
        this.longitudY = longitudY;
        this.ocupado = false;
        this.ficha = null;
    }

    draw() {
        this.context.fillRect(this.posCanvasX, this.posCanvasY, this.longitudX, this.longitudY);
        this.context.rect(this.posCanvasX, this.posCanvasY, this.longitudX, this.longitudY);
        this.context.lineWidth = 1;

        this.context.drawImage(this.imagen,this.posCanvasX,this.posCanvasY,this.longitudX,this.longitudY);
    }

    getLongitudX() {
        return this.longitudX;
    }

    getLongitudY() {
        return this.longitudY;
    }

    isOcupado() {
        return this.ocupado;
    }

    setOcupado(valor) {
        this.ocupado = valor;
    }

    setJugador(descripcion) {
        this.jugador = descripcion;
    }
    getFicha(){
        return this.ficha;
    }
    setFicha (f){
        this.ficha = f ;
    }
}   