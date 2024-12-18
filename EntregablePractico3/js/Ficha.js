class Ficha extends Juego {
    constructor(jugador, id, context, posInicialX, posInicialY, imagen, color) {
        super(jugador, context, posInicialX, posInicialY, imagen);
        this.radio = 25//Math.round(Math.random() * 100);
        this.anguloDesde = 0;
        this.anguloHasta = 2 * Math.PI;
        this.libre = true;
        this.id = id;
        this.color= color;
        this.clickeada = false;
        this.ganadora = false;
    }

    //Si se encuentra una posicion en el tablero se lleva a esa posicion
    //sino vuelve al inicio
    setPosicionFinal(posX, posY) {
        this.posCanvasX = posX;
        this.posCanvasY = posY;
        this.posInicialX = posX;
        this.posInicialY = posY;
    }
     
    getPosicionInicial() {
        this.posCanvasX = this.posInicialX;
        this.posCanvasY = this.posInicialY;
    }

    setPosicionInicial() {
        this.posCanvasX = this.posInicialX;
        this.posCanvasY = this.posInicialY;
    }

    draw() {
        this.context.save();//guardar el estado actual del contexto
        this.context.beginPath();
        if (this.clickeada) {
           this.context.strokeStyle = 'violet';
           this.context.lineWidth = 2; 
            this.context.shadowColor = 'violet'; 
            this.context.shadowBlur = 10; 
            this.context.shadowOffsetX = 5; 
            this.context.shadowOffsetY = 5; 
        } else if(this.ganadora){
            this.context.strokeStyle = 'violet';
            this.context.lineWidth = 5; 
             this.context.shadowColor = 'violet'; 
             this.context.shadowBlur = 15; 
             this.context.shadowOffsetX = 5; 
             this.context.shadowOffsetY = 5;        
        } else {
            this.context.strokeStyle = this.color; 
       }
        this.context.arc(this.posCanvasX, this.posCanvasY, this.radio, this.anguloDesde, this.anguloHasta);
        this.context.stroke();
        this.context.closePath();
        this.context.clip();
        this.context.drawImage(this.imagen, this.posCanvasX-25, this.posCanvasY-25, 50, 50);
        this.context.restore();
    }

    getRadio() {
        return this.radio;
    }

    estaLibre() {
        return this.libre;
    }

    setEstaLibre(valor) {
        this.libre = valor;
    }

    getId() {
        return this.id;
    }
    setClickeada (valor){
        this.clickeada = valor;
    }
    setGanadora (valor){
        this.ganadora = valor;
    }

}