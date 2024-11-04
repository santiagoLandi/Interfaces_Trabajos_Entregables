"use strict";

document.addEventListener("DOMContentLoaded", iniciarJuego);

function iniciarJuego() {
  const TIEMPO_JUEGO = 300; //Tiempo de la partida
  const CANVAS_WIDTH = 1000; //Ancho del canvas
  const CANVAS_HEIGHT = 600; //Alto del canvas

  const CANVAS_IMG_BACKGROUND = "img/fondoCanvas.png"; //Imagen de fondo del juego en el canvas
  const CANVAS_IMG_TABLERO = "img/ficha-juego.jpg"; //Imagen para armar el tablero
  let fondoCanvas = new Image(); //Inicializacion de la variable imagen
  fondoCanvas.src = CANVAS_IMG_BACKGROUND; //Llama a la variable de la imagen

  let imagenFicha1 = new Image(); //Inicializacion de la variable imagen ficha 1
  let imagenFicha2 = new Image(); //Inicializacion de la variable imagen ficha 2
  let color = "violet"; //Variable color, para el borde de las fichas
  let ficha1; // Variable ficha 1
  let ficha2; // Variable ficha 2
  let arregloFichasJugador1 = []; //Arreglo para las fichas del jugador 1
  let arregloFichasJugador2 = []; //Arreglo para las fichas del jugador 2
  let ficha_j1_seleccionada = null; //Variable ficha seleccionada jugador 1
  let ficha_j2_seleccionada = null; //Variable ficha seleccionada jugador 2

  let imagenTablero = new Image(); //Inicializacion de la variable imagen tablero
  imagenTablero.src = CANVAS_IMG_TABLERO; //Llama a la variable que tiene la imagen
  let tipoTablero; //Variable para saber de que tamano es el tablero
  let columnas; //Columnas del tablero
  let filas; //Filas del tablero
  let matriz_box = []; //Matriz del tablero
  let inicioTableroX; //Pos inicio del tablero en X
  let inicioTableroY; //Pos inicio del tablero en Y

  let turno_jugador_1; //Variable para el turno del jugador 1

  let jugador1; //Variable para jugador 1
  let jugador2; //Variable para jugador 2

  let finJuego; //Variable booleana para el fin del juego

  let timer = TIEMPO_JUEGO; //Variable con el tiempo del juego
  let tiempo; //Variable para el tiempo

  let boxSeleccionado = null; //Variable para saber si el box esta seleccionado

  let ficha; //Variable ficha

  let sectionJuego = document.querySelector(".contenedor-juego-4-en-linea");
  sectionJuego.style.visibility = "";

  let contentCanvas = document.querySelector(".content-canvas");
  contentCanvas.style.display = "none";

  let canvas = document.querySelector("#canvas");
  let ctx = canvas.getContext("2d");
  canvas.style.display = "none";

  let sectionJuegoOpciones = document.getElementById("section-juego-opciones");
  sectionJuegoOpciones.style.display = "none";

  //Boton jugar de la imagen previa del juego
  let btnPlay = document.getElementById("btn-juego4");
  btnPlay.addEventListener("click", function () {
    sectionJuego.style.display = "none";
    sectionJuego.style.height = "600px";
    sectionJuegoOpciones.style.display = "flex";
  });

  //Boton para salir del juego
  let btnSalir = document.getElementById("btn-salir");
  btnSalir.addEventListener("click", function () {
    sectionJuego.style.display = "";
    sectionJuego.style.height = "600px";
    sectionJuegoOpciones.style.display = "none";
  });

  //Muestra a que Jugador le toca jugar. Al inicio jugador 1 por defecto.
  let turnoCanvas = document.querySelector(".turno-juego");
  let turnoCanvas1 = document.querySelector(".turno-juego1");

  //Resultado final del juego. Ganador o empate.
  let resultadoCanvas = document.querySelector(".resultado-canvas");

  //Inicializa variables al reiniciar o salir del juego.
  function initVariables() {
    resultadoCanvas.style.display = "none";
    turno_jugador_1 = true;
    turnoCanvas.style.display = "flex";
    turnoCanvas.innerHTML = "Turno " + jugador1;
    turnoCanvas1.style.display = "none";
    turnoCanvas1.innerHTML = "Turno " + jugador1;

    arregloFichasJugador1 = [];
    arregloFichasJugador2 = [];
    matriz_box = [];
    ficha_j1_seleccionada = null;
    ficha_j2_seleccionada = null;
    boxSeleccionado = null;
    finJuego = false;
    canvasDraw();
    timer = TIEMPO_JUEGO;
    clearTimeout(tiempo);
    decreaseTimer();
  }

  //Se inicia el juego. Boton jugar de las opciones disponibles
  let btnPlayJuego = document.querySelector("#btn-play-juego");
  btnPlayJuego.addEventListener("click", function () {
    //Display solo canvas
    sectionJuego.style.display = "none";
    sectionJuegoOpciones.style.display = "none";
    contentCanvas.style.display = "block";
    canvas.style.display = "block";
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    //Opciones seleccionadas de tipo de tablero
    let opcionesTablero = document.getElementsByName("tipoTablero");
    for (let d of opcionesTablero) {
      if (d.checked) {
        tipoTablero = Number(d.value);
        columnas = tipoTablero + 2;
        filas = tipoTablero + 1;
      }
    }
    //Jugador 1
    jugador1 = document.getElementById("text-jugador1").textContent;
    let fichas1 = document.getElementsByName("targetgroup1");
    for (let ficha of fichas1) {
      if (ficha.checked) {
        ficha1 = ficha.value;
      }
    }
    imagenFicha1.src = "img/" + ficha1 + ".png";
    //Jugador 2
    jugador2 = document.getElementById("text-jugador2").textContent;
    let fichas2 = document.getElementsByName("targetgroup2");
    for (let ficha of fichas2) {
      if (ficha.checked) {
        ficha2 = ficha.value;
      }
    }
    imagenFicha2.src = "img/" + ficha2 + ".png";

    initVariables();
  });

  //Funcion que dibuja la pantalla de inicio de juego
  function canvasDraw() {
    //Primero dibujo primero el fondo
    ctx.drawImage(fondoCanvas, 0, 0, canvas.width, canvas.height);
    //Segundo las fichas
    let fichas_totales = ((filas + 1) * (columnas + 1)) / 2;
    for (let i = 0; i < fichas_totales; i++) {
      let f1 = new Ficha(
        jugador1,
        "f1" + i + 1,
        ctx,
        103,
        490 - i * 8,
        imagenFicha1,
        color
      );
      f1.draw();
      arregloFichasJugador1[i] = f1;
    }
    for (let i = 0; i < fichas_totales; i++) {
      let f2 = new Ficha(
        jugador2,
        "f2" + i + 1,
        ctx,
        897,
        490 - i * 8,
        imagenFicha2,
        color
      );
      f2.draw();
      arregloFichasJugador2[i] = f2;
    }
    //Tercero el tablero
    switch (tipoTablero) {
      case 4:
        inicioTableroX = 290;
        inicioTableroY = 160;
        break;
      case 5:
        inicioTableroX = 265;
        inicioTableroY = 130;
        break;
      case 6:
        inicioTableroX = 235;
        inicioTableroY = 100;
        break;
      case 7:
        inicioTableroX = 208;
        inicioTableroY = 70;
        break;
    }
    for (let col = columnas; col >= 0; col--) {
      matriz_box[col] = [];
      for (let fil = filas; fil >= 0; fil--) {
        let tablero = new Tablero(
          "",
          ctx,
          inicioTableroX + col * 58,
          inicioTableroY + fil * 58,
          imagenTablero,
          60,
          60
        );
        tablero.draw();
        matriz_box[col][fil] = tablero;
      }
    }
  }

  //Boton salir del juego en ejecucion
  let btnGameOut = document.querySelector("#btn-game-out");
  btnGameOut.addEventListener("click", function (event) {
    contentCanvas.style.display = "none";
    canvas.style.display = "none";
    sectionJuego.style.display = "none";
    sectionJuego.style.height = "600px";
    sectionJuegoOpciones.style.display = "";
    initVariables();
  });

  //Boton reiniciar juego. Reinicia la partida
  let btnReiniciar = document.getElementById("btn-reiniciar");
  btnReiniciar.addEventListener("click", function (event) {
    initVariables();
  });

  //Eventos del mouse al seleccionar una ficha
  canvas.addEventListener("mousedown", seleccionarFicha);

  function seleccionarFicha(event) {
    if (!finJuego) {
      let mousePos = getMousePos(event);
      if (turno_jugador_1) {
        for (let i = 0; i < arregloFichasJugador1.length; i++) {
          let x = mousePos.x;
          let y = mousePos.y;
          let dx = Math.abs(x - arregloFichasJugador1[i].getPosCanvasX()); //valor absoluto de la diferencia entre dos números.
          let dy = Math.abs(y - arregloFichasJugador1[i].getPosCanvasY());
          let distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)); //distancia euclidiana entre dos puntos en un espacio bidimensional. conecta dos puntos en un plano.
          if (
            distancia <= arregloFichasJugador1[i].getRadio() &&
            arregloFichasJugador1[i].estaLibre()
          ) {
            ficha_j1_seleccionada = arregloFichasJugador1[i];
            break;
          }
        }
        ficha_j1_seleccionada.setClickeada(true);
      } else {
        //Juega jugador dos.
        for (let i = 0; i < arregloFichasJugador2.length; i++) {
          let x = mousePos.x;
          let y = mousePos.y;
          let dx = Math.abs(x - arregloFichasJugador2[i].getPosCanvasX());
          let dy = Math.abs(y - arregloFichasJugador2[i].getPosCanvasY());
          let distancia = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
          if (
            distancia <= arregloFichasJugador2[i].getRadio() &&
            arregloFichasJugador2[i].estaLibre()
          ) {
            ficha_j2_seleccionada = arregloFichasJugador2[i];
            break;
          }
        }
        ficha_j2_seleccionada.setClickeada(true);
      }
    }
  }

  //Movimiento del mouse con el click apretado
  canvas.addEventListener("mousemove", moverFicha);

  function moverFicha(event) {
    let mousePos = getMousePos(event);

    // Verificar el turno y mover la ficha seleccionada según el jugador
    if (turno_jugador_1) {
      if (ficha_j1_seleccionada != null) {
        // Actualizar posición de la ficha mientras se arrastra
        ficha_j1_seleccionada.setPosicionCanvas(mousePos.x, mousePos.y);
      }
    } else {
      if (ficha_j2_seleccionada != null) {
        ficha_j2_seleccionada.setPosicionCanvas(mousePos.x, mousePos.y);
      }
    }

    let anchoColumnaInvisible = 60;
    // Cálculo de cada columna en el tablero
    let columna = Math.floor(
      (mousePos.x - inicioTableroX) / anchoColumnaInvisible
    );

    // Limpiar el canvas antes de redibujar
    canvasActualizar();

    // Resaltar la columna actual si está dentro de los límites
    if (columna >= 0 && columna <= columnas) {
      dibujarIndicadorColumna(columna);
    }
  }

  function dibujarIndicadorColumna(columna) {
    const anchoColumna = 60; // Ancho de cada columna en el tablero
    const posX =
      inicioTableroX + columna * anchoColumna + anchoColumna / 2 - columna * 2; // Centro de la columna
    const posY = inicioTableroY - 2; // Posición justo arriba del tablero

    // Dibuja un triángulo apuntando hacia abajo como indicador
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo(posX - 10, posY - 20);
    ctx.lineTo(posX + 10, posY - 20);
    ctx.closePath();

    // Color del triángulo
    ctx.fillStyle = "#A48EFF";
    ctx.fill();
  }

  // Click del mouse levanta --> larga la ficha / primero controlo donde --> valido POS
  canvas.addEventListener("mouseup", soltarFicha);

  function soltarFicha(event) {
    let anchoColumnaInvisible = 60;
    let altoColumnaInvisible = 120;
    let columnasInvisibles = [];
    let posicionYInvisible = inicioTableroY - altoColumnaInvisible;
    let posicionXInvisible = inicioTableroX;
    let numeroColumnas = columnas; // Utiliza la cantidad de columnas de la matriz
    let validarPosX = -1;
    let validarPosY = -1;
    // Llena el arreglo con las posiciones de las columnas invisibles
    for (let i = 0; i <= numeroColumnas; i++) {
      let x = posicionXInvisible + i * anchoColumnaInvisible;
      let y = posicionYInvisible;
      columnasInvisibles.push({ x, y });
    }
    if (ficha_j1_seleccionada != null || ficha_j2_seleccionada != null) {
      let mousePos = getMousePos(event);
      for (let col = 0; col < columnasInvisibles.length; col++) {
        let columnaInvisible = columnasInvisibles[col];
        if (
          mousePos.x >= columnaInvisible.x &&
          mousePos.x <= columnaInvisible.x + anchoColumnaInvisible &&
          mousePos.y >= columnaInvisible.y &&
          mousePos.y <= columnaInvisible.y + altoColumnaInvisible
        )
          //Si se suelta la ficha en un box valido
          for (let fil = filas; fil >= 0 && !boxSeleccionado; fil--) {
            if (!matriz_box[col][fil].isOcupado()) {
              matriz_box[col][fil].setOcupado(true);
              if (ficha_j1_seleccionada != null) {
                matriz_box[col][fil].setJugador(
                  ficha_j1_seleccionada.getJugador()
                );
                matriz_box[col][fil].setFicha(ficha_j1_seleccionada);
                ficha = matriz_box[col][fil].getFicha();
              } else {
                if (ficha_j2_seleccionada != null) {
                  matriz_box[col][fil].setJugador(
                    ficha_j2_seleccionada.getJugador()
                  );
                  matriz_box[col][fil].setFicha(ficha_j2_seleccionada);
                  ficha = matriz_box[col][fil].getFicha();
                }
              }
              boxSeleccionado = matriz_box[col][fil];
              validarPosX = col;
              validarPosY = fil;
            }
          }
      }
    }
    if (turno_jugador_1 && ficha_j1_seleccionada != null) {
      ficha_j1_seleccionada.setClickeada(false);
      for (let y = 0; y < arregloFichasJugador1.length; y++) {
        if (
          ficha_j1_seleccionada.getId() === arregloFichasJugador1[y].getId()
        ) {
          if (boxSeleccionado != null) {
            let posNueva = {
              x:
                boxSeleccionado.getPosCanvasX() +
                boxSeleccionado.getLongitudX() / 2,
              y:
                boxSeleccionado.getPosCanvasY() -
                1 +
                (boxSeleccionado.getLongitudY() -
                  arregloFichasJugador1[y].getRadio()),
            }; //Si hay que colocar la ficha
            const jugador = boxSeleccionado.getJugador();
            const posX = validarPosX;
            const posY = validarPosY;
            // animacion de caida
            colocarFichaConEfecto(ficha, posNueva.x, posNueva.y);

            //Valida si hay un ganador
            setTimeout(() => {
              validarJugada(jugador, posX, posY);

              arregloFichasJugador1[y].setEstaLibre(false);
              arregloFichasJugador1[y].setPosicionFinal(posNueva.x, posNueva.y);
              //Habilita la siguinte ficha
              arregloFichasJugador1[y - 1].setEstaLibre(true);
              //Si coloca la ficha cambia de turno
              turno_jugador_1 = !turno_jugador_1;

              if (!finJuego) {
                turnoCanvas.innerHTML = "Turno " + jugador2;
                turnoCanvas.style.display = "none";
                turnoCanvas1.innerHTML = "Turno " + jugador2;
                turnoCanvas1.style.display = "flex";
              }
            }, 1500); // tiempo para que cambie de jugador y valide la jugada
          } else {
            //Vuelve al origen
            if (
              boxSeleccionado == null &&
              ficha_j1_seleccionada.getId() === arregloFichasJugador1[y].getId()
            ) {
              arregloFichasJugador1[y].setPosicionInicial();
            }
          }
          break;
        }
      }
      ficha_j1_seleccionada = null;
    } else {
      if (!turno_jugador_1 && ficha_j2_seleccionada != null) {
        ficha_j2_seleccionada.setClickeada(false);
        for (let y = 0; y < arregloFichasJugador2.length; y++) {
          if (
            ficha_j2_seleccionada.getId() === arregloFichasJugador2[y].getId()
          ) {
            if (boxSeleccionado != null) {
              let posNueva = {
                x:
                  boxSeleccionado.getPosCanvasX() +
                  boxSeleccionado.getLongitudX() / 2,
                y:
                  boxSeleccionado.getPosCanvasY() -
                  1 +
                  (boxSeleccionado.getLongitudY() -
                    arregloFichasJugador2[y].getRadio()),
              }; //Si hay que colocar la ficha
              const jugador = boxSeleccionado.getJugador();
              const posX = validarPosX;
              const posY = validarPosY;
              // animacion de caida
              colocarFichaConEfecto(ficha, posNueva.x, posNueva.y);

              //Valida si hay un ganador
              setTimeout(() => {
                validarJugada(jugador, posX, posY);

                arregloFichasJugador2[y].setEstaLibre(false);
                arregloFichasJugador2[y].setPosicionFinal(
                  posNueva.x,
                  posNueva.y
                );
                //Habilita la siguinte ficha
                arregloFichasJugador2[y - 1].setEstaLibre(true);
                //Si coloca la ficha cambia de turno
                if (!finJuego) {
                  turno_jugador_1 = !turno_jugador_1;
                  turnoCanvas.innerHTML = "Turno " + jugador1;
                  turnoCanvas.style.display = "flex";
                  turnoCanvas1.innerHTML = "Turno " + jugador1;
                  turnoCanvas1.style.display = "none";
                }
              }, 1500); // tiempo para que cambie de jugador y valide la jugada
            } else {
              //Vuelve al origen
              if (
                boxSeleccionado == null &&
                ficha_j2_seleccionada.getId() ===
                  arregloFichasJugador2[y].getId()
              ) {
                arregloFichasJugador2[y].setPosicionInicial();
              }
            }
            break;
          }
        }
        ficha_j2_seleccionada = null;
      }
    }
    boxSeleccionado = null;
    canvasActualizar();
  }

  function colocarFichaConEfecto(ficha, posFinalX, posFinalY) {
    ficha.posCanvasX = posFinalX;
    // posY en la posición actual de la ficha en Y
    let posY = ficha.posCanvasY;

    function animarCaida() {
      if (posY < posFinalY) {
        posY += 5; // para la velocidad de la caída
        ficha.posCanvasY = posY; // posición de Y en la ficha
        canvasActualizar();
        requestAnimationFrame(animarCaida); // Repite la animación
      } else {
        ficha.posCanvasY = posFinalY;
        canvasActualizar();
      }
    }

    animarCaida();
  }

  function validarJugada(jugador, cInicial, fInicial) {
    let contador;
    let fichasGanadoras = [];

    // Validación horizontal
    contador = 0;
    fichasGanadoras = [];
    for (let col = 0; col <= columnas; col++) {
      if (matriz_box[col][fInicial].getJugador() === jugador) {
        contador++;
        fichasGanadoras.push(matriz_box[col][fInicial].getFicha());
      } else {
        contador = 0;
        fichasGanadoras = [];
      }

      if (contador === tipoTablero) {
        fichasGanadoras.forEach((ficha) => ficha.setGanadora(true));
        return finalizarJuego(jugador);
      }
    }

    // Validación vertical
    contador = 0;
    fichasGanadoras = [];
    for (let fil = fInicial; fil <= filas; fil++) {
      if (matriz_box[cInicial][fil].getJugador() === jugador) {
        contador++;
        fichasGanadoras.push(matriz_box[cInicial][fil].getFicha());
      } else {
        break;
      }

      if (contador === tipoTablero) {
        fichasGanadoras.forEach((ficha) => ficha.setGanadora(true));
        return finalizarJuego(jugador);
      }
    }

    // Validación diagonal
    const direcciones = [
      { dx: 1, dy: -1 }, // Diagonal 1: abajo-derecha y arriba-izquierda
      { dx: 1, dy: 1 }, // Diagonal 2: abajo-izquierda y arriba-derecha
    ];

    for (const { dx, dy } of direcciones) {
      contador = 1;
      fichasGanadoras = [matriz_box[cInicial][fInicial].getFicha()]; // Comienza con la ficha inicial

      // Expande hacia una dirección (positiva)
      for (let paso = 1; paso < tipoTablero; paso++) {
        let x1 = cInicial + dx * paso;
        let y1 = fInicial + dy * paso;
        if (
          x1 <= columnas &&
          y1 >= 0 &&
          y1 <= filas &&
          matriz_box[x1][y1].getJugador() === jugador
        ) {
          contador++;
          fichasGanadoras.push(matriz_box[x1][y1].getFicha());
        } else {
          break;
        }
      }

      // Expande en la otra dirección (negativa)
      for (let paso = 1; paso < tipoTablero; paso++) {
        let x2 = cInicial - dx * paso;
        let y2 = fInicial - dy * paso;
        if (
          x2 >= 0 &&
          y2 >= 0 &&
          y2 <= filas &&
          matriz_box[x2][y2].getJugador() === jugador
        ) {
          contador++;
          fichasGanadoras.push(matriz_box[x2][y2].getFicha());
        } else {
          break;
        }
      }

      if (contador == tipoTablero) {
        fichasGanadoras.forEach((ficha) => ficha.setGanadora(true));
        return finalizarJuego(jugador);
      }
    }
  }

  //Acciones finales del juego.
  function finalizarJuego(jugador) {
    clearTimeout(tiempo);
    resultadoCanvas.style.display = "flex";
    turnoCanvas.style.display = "none";
    turnoCanvas1.style.display = "none";
    resultadoCanvas.innerHTML = "Ganador " + jugador;
    finJuego = true;
  }

  //Actualiza el canvas
  function canvasActualizar() {
    // Fondo
    ctx.drawImage(fondoCanvas, 0, 0, canvas.width, canvas.height);
    // Tablero
    for (let i = columnas; i >= 0; i--) {
      for (let j = filas; j >= 0; j--) {
        matriz_box[i][j].draw();
      }
    }
    //Fichas del jugador 1
    for (let i = 0; i < arregloFichasJugador1.length; i++) {
      arregloFichasJugador1[i].draw();
    }
    //Fichas del jugador 2
    for (let i = 0; i < arregloFichasJugador2.length; i++) {
      arregloFichasJugador2[i].draw();
    }
  }

  //Funcion encargada de controlar el tiempo de partida
  function decreaseTimer() {
    if (timer > 0) {
      tiempo = setTimeout(decreaseTimer, 1000);
      timer--;
      let minutes = Math.floor(timer / 60);
      let segundos = timer % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      segundos = segundos < 10 ? "0" + segundos : segundos;
      document.querySelector(".timer-juego").innerHTML =
        minutes + " : " + segundos;
    }
    if (timer === 0) {
      clearTimeout(tiempo);
      resultadoCanvas.style.display = "flex";
      resultadoCanvas.innerHTML = "Empate";
      finJuego = true;
    }
  }

  //Detectar posicion del mouse
  function getMousePos(event) {
    let ClientRect = canvas.getBoundingClientRect();
    return {
      //objeto
      x: Math.round(event.clientX - ClientRect.left),
      y: Math.round(event.clientY - ClientRect.top),
    };
  }
}
