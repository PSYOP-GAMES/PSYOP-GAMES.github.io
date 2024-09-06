let add_text=(o)=>{// {text position}
    if(o.fillStyle){the_canvas.ctx.fillStyle=o.fillStyle};
    the_canvas.ctx.font = o.font || '20px Segoe UI';
    the_canvas.ctx.fillText(
      o.text, 
      o.position.x,
      o.position.y);
}
