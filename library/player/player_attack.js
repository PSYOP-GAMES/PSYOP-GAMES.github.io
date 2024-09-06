let player_attack = create_repeating_timer_function(2000,()=>{
  the_enemy.hp -= the_player.attack;
  console.log('player attack');
});
