let draw_health_counter =(
  character, // character {position{x y} hp}
  position_offset=[0,-10],
  heart_image)=>{
    if(heart_image===undefined){heart_image='💓';}
    let hp_amount = character.hp.toString();
    add_text({
      text: `${heart_image} ${hp_amount}`,
      position: {
        x: character.position.x + position_offset[0],
        y: character.position.y + position_offset[1],
      },
      fillStyle: 'red',
      font: '10px SegoeUI'
      
    });
  }
