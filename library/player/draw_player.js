let draw_player=()=>{
  let player_emoji = '🪂';
  add_text({
    text: player_emoji,
    position: the_player.position,
    fillStyle: 'black',
  });
  draw_health_counter(the_player,[0,-20]);
}
