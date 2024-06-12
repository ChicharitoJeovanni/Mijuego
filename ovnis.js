// Definir la función para dibujar los pinos
function dibujarPinos() {
    // Dibujar los pinos
    ctx.fillStyle = "#228B22"; // Verde oscuro
    // Primer pino
    ctx.beginPath();
    ctx.moveTo(canvas.width / 4, canvas.height - 200); // Punto inferior
    ctx.lineTo(canvas.width / 3, canvas.height * 0.2); // Punto superior izquierdo
    ctx.lineTo(canvas.width / 2.5, canvas.height - 200); // Punto superior derecho
    ctx.closePath();
    ctx.fill();
    // Segundo pino
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.625, canvas.height - 200); // Punto inferior
    ctx.lineTo(canvas.width * 0.75, canvas.height * 0.4); // Punto superior izquierdo
    ctx.lineTo(canvas.width * 0.875, canvas.height - 200); // Punto superior derecho
    ctx.closePath();
    ctx.fill();
}

// Llamar a la función para dibujar los pinos
dibujarPinos();
