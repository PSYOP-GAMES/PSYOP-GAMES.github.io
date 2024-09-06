let the_player = {};
let establish_player =()=>{
  the_player ={
    position: {
      x: 1 / 2 * the_canvas.width,
      y: 5/6 * the_canvas.height, },
    hp: 1,
    attack: 1,};
  update_functions.push(player_attack)
}

let the_enemy ={};
let establish_enemy =()=>{
  the_enemy ={
    position:{
      x: 1 / 2 * the_canvas.width,
      y: 1 / 5 * the_canvas.height, },
    hp:5,
    attack:1,};
}
