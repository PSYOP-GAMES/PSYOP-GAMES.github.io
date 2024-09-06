let draw_enemy = () => {
  let enemy_emoji = '👾';
  add_text({
    text: enemy_emoji,
    position: the_enemy.position,
    fillStyle: 'gray',
  });
  draw_health_counter(the_enemy,[0,-20]);
}
