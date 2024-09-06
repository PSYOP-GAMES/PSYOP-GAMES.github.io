let add = (e) => {
  let x = document.createElement(e);
  document.body.appendChild(x);
  return x;
}
let create_canvas = () => {
  let c = add('canvas');
  c.ctx = c.getContext('2d');
  c.width = 400;
  c.height = 200;
  c.background = (color) => {
    c.ctx.fillStyle = color;
    c.ctx.fillRect(0, 0, c.width, c.height);
  }
  return c;
}
let the_canvas = create_canvas();
