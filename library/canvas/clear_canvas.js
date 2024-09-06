function clear_canvas() {
  const ctx = the_canvas.ctx;
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4;
  ctx.fillRect(0, 0, the_canvas.width, the_canvas.height);
  ctx.strokeRect(0, 0, the_canvas.width, the_canvas.height);
  
}
