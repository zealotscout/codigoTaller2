function Circulo(juego, x, y ) {
	this.juego = juego; // definicion de laclase 
	this.x = x;
	this.y = y;
	this.remover = false;
}

Circulo.prototype.actualizar = function() {

  // logica de actualizacion
  
 
    if (this.x < this.juego.ctx.canvas.width) {
        this.x += 4;
		
		
    }	
	
	
	
	
	
		
	
   else{
	if(this.x==this.juego.ctx.canvas.width)
		{
	this.x-=2;
	}
	}
};

Circulo.prototype.dibujar = function(ctx) {  // logica de dibujo
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};