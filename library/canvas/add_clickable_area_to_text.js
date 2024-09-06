let add_clickable_area_to_text =(o,f)=>{
  // o {position{x y} font text}
  // Get the canvas element
  let ctx = the_canvas.ctx;
  ctx.font = o.font;

  // Define the rectangle properties in an object
  var rect = {
    x: o.position.x,
    y: o.position.y,
    color: 'blue'
  };

  let extract_font_size =(s)=>{
    var fontSizeMatch = s.match(/\d+/);
    return parseInt(fontSizeMatch[0]);
  }
  
  // Draw the text
  var textWidth = ctx.measureText(o.text).width;
  var textHeight = extract_font_size(o.font);

  // Calculate the rectangle's width and height
  rect.width = textWidth; // add some padding
  rect.height = textHeight; // add some padding
  rect.y -= rect.height;

  let x_offset = rect.width * o.x_offset|0.2;
  rect.width += x_offset;
  rect.x -= 1/2*x_offset;

  let y_offset = rect.height *o.y_offset|0.2;
  rect.height += y_offset;
  rect.y -= 1/2*y_offset;

  // Draw the rectangle
  ctx.fillStyle = rect.color;

  function isClickInRectangle(x, y, rect) {
    return (
      x >= rect.x &&
      x <= rect.x + rect.width &&
      y >= rect.y &&
      y <= rect.y + rect.height
    );
  }

  let canvas = the_canvas;
  canvas.addEventListener('click', (e) => {
    const click_x = e.clientX;//- canvas.offsetLeft;
    const click_y = e.clientY;// canvas.offsetTop;
    if (isClickInRectangle(click_x,click_y, rect)) {
      console.warn('Click is within the rectangle');
      ctx.fillStyle ='white';
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
      f();
    } else {
      
      console.warn('Click is not within the rectangle');
    }
  });
}
