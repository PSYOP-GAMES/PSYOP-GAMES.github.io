



// [PSYOP GAMES]
//   *PRESENTS*
// A U T O     C L A S H
//
// P L A Y 
// U P G R A D E S 
// D I S C O R D  SERVER
// A C C O U N T
// B O N U S  CONTENT
// C R E D I T S  AND  L I C E N S I N G
// S U G G E S T I O N  BOX
let button_clicked = 'None';
let click_play_button =
  ()=>{
    button_clicked = 'play';
    console.log('play clicked');
    update_functions.push(create_one_off_timer_function(1000,()=>{
      //run_autobattler_game();
      draw_functions =[clear_canvas];
      update_functions =[];
      run_autobattler_game();
    }));
  };

let draw_title_text = () => {
  add_text({
    text: '[ P S Y O P     G A M E S ]  PRESENTS',
    position: {
      x: 1 / 6 * the_canvas.width,
      y: 1 / 6 * the_canvas.height,
    },
    fillStyle: 'black',
    font: '10px SegoeUI',
  });
  add_text({
    text: 'A U T O   C L A S H',
    position: {
      x: 1 / 6 * the_canvas.width,
      y: 1 / 6 * the_canvas.height + 30,
    },
    fillStyle: 'black',
    font: '20px SegoeUI',
  });
  let play_button_text = {
    text: 'P L A Y',
    position: {
      x: 1 / 6 * the_canvas.width,
      y: 1 / 6 * the_canvas.height + 60,
    },
    fillStyle: 'black',
    font: '14px SegoeUI',
  };
  
      
  add_clickable_area_to_text(play_button_text,click_play_button);                
  if(button_clicked!=='play'){add_text(play_button_text);}
  
  
  add_text({
    text: 'U P G R A D E S',
    position: {
      x: 1 / 6 * the_canvas.width,
      y: 1 / 6 * the_canvas.height + 75,
    },
    fillStyle: 'black',
    font: '14px SegoeUI',
  });
}

let run_main_menu =()=>{
  draw_functions = [
    clear_canvas,
    draw_title_text,
  ];
  update_functions = [];
  update_functions.push(create_one_off_timer_function(1500,click_play_button));
}
run_main_menu();
