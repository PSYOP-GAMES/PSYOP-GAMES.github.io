let run_autobattler_game_old= () => {
  draw_functions = [
    clear_canvas,
    draw_player,
    draw_enemy,
  ];
  establish_player();
  establish_enemy();
}

let the_players_lives = 0;
let run_autobattler_game =()=>{
  the_players_lives = 1;
  
  // shop battle loop
  run_shop(); // which will then run the battle
};

//run_autobattler_game();
