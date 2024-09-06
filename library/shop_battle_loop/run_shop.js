let gold_emoji = '💰';
let gold_emoji_text ={
  text: gold_emoji,
  position: {
    x: 5/100 * the_canvas.width,
    y: 1 / 8 * the_canvas.height,
  },
  fillStyle: 'black',
  font: Math.ceil(the_canvas.height*1/10).toString()+'px SegoeUI',
};

let draw_gold_emoji=()=>{
  add_text(gold_emoji_text);
  console.warn('draw gold emoji');
}
let draw_number_that_represents_the_players_gold =()=>{
  let gold_amount_text = {
    text: the_player.gold.toString(),
    position: {
      x: gold_emoji_text.position.x+((6/100)* the_canvas.width),
      y: gold_emoji_text.position.y,
    },
    fillStyle: 'black',
    font: gold_emoji_text.font,
  };
  add_text(gold_amount_text);
}
let rest_of_list =l=>{
  return l.slice(1);
}

let draw_shop_emojis  =()=>{
  //let shop_emojis = ['🪂','🪂','🪂','🪂','🪂'];
  let dmg_emoji = '💥';
  let loop =(l,offset=0)=>{
    if(l.length <= 0){ return }
    let emoji_text ={
      text: l[0].em,
      position: {
        x: (((17/100*offset)+(15/100))*the_canvas.width),
        y: 33/100* the_canvas.height,
      },
      fillStyle: 'black',
      font: Math.ceil(the_canvas.height*16/100).toString()+'px SegoeUI',
    }
    
    let dmg_text ={
      text: `${dmg_emoji} ${l[0].dmg}`,
      position: {
        x: emoji_text.position.x,
        y: emoji_text.position.y + (10/100* the_canvas.height),
      },
      fillStyle: 'black',
      font: Math.ceil(the_canvas.height*4/100).toString()+'px SegoeUI',
    }
    let hp_emoji='💖';
    let hp_text ={
      text: `${hp_emoji} ${l[0].hp}`,
      position: {
        x: emoji_text.position.x+(6/100*the_canvas.width),
        y: emoji_text.position.y + (10/100* the_canvas.height),
      },
      fillStyle: 'black',
      font: Math.ceil(the_canvas.height*4/100).toString()+'px SegoeUI',
    }

    add_text(hp_text)
    
    add_text(emoji_text);
    add_text(dmg_text);
    loop(rest_of_list(l),offset+1);
  }
  loop(shop_merch);
}
let dice_emoji = '🎲';
let reroll_shop_text ={
  text: dice_emoji,
  position: {
    x: 80/100* the_canvas.width,
    y: 60/100 * the_canvas.height,
  },
  fillStyle: 'black',
  font: Math.ceil(the_canvas.height*15/100).toString()+'px SegoeUI',
};
let draw_die_to_represent_rerolling_the_shop=()=>{
  add_text(reroll_shop_text);
}

let run_shop =()=>{
  update_functions = [];
  the_player.gold = 100;
  roll_shop(0);
  draw_functions = [
    clear_canvas,
    draw_gold_emoji,
    draw_number_that_represents_the_players_gold,
    draw_shop_emojis,
    draw_die_to_represent_rerolling_the_shop,
    
  ];
  add_clickable_area_to_text(reroll_shop_text,roll_shop);
}
