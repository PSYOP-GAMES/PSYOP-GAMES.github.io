function load_js_file(scriptUrl) {
    const script = document.createElement('script');
    script.src = scriptUrl;
    document.head.appendChild(script);
}

let the_files = [
  'library/tools/random.js',
  'library/create_timer_function.js',
  'library/player/draw_player.js',  
  'library/player/player_attack.js',
  'library/enemy/draw_enemy.js',
  'library/health_counter/draw_health_counter.js',
  'library/canvas/create_canvas.js',
  'library/canvas/clear_canvas.js',
  'library/canvas/add_text.js',
  'library/canvas/add_clickable_area_to_text.js',
  'library/engine.js',
  'library/player/establish_player.js',
  'library/run_engine.js',

  'library/shop_battle_loop/shop/roll_shop.js',
  'library/shop_battle_loop/run_shop.js',
  'library/shop_battle_loop/run_battle.js',
  'library/shop_battle_loop/run_win_lose_consequences.js',
    
  'library/game/run_autobattler_game.js',
  'library/game/run_main_menu.js',
];

let load_the_files =(l)=>{
    if(l.length <= 0){ return }
    else { load_js_file(l[0]);
           setTimeout(()=>{load_the_files(l.slice(1))},30)}
}
load_the_files(the_files);
console.log('end of load files');
