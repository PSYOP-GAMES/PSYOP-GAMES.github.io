let draw_functions = [];
let update_functions =[];

let call_all_functions =(l,t)=>{
    if(t){l.map(f=>f(t))}
    else{l.forEach(f=>f())}}

let last_recorded_time = undefined;

let main_loop =()=>{
    if(last_recorded_time===undefined){
        last_recorded_time = Date.now();
        requestAnimationFrame(main_loop);
    }
    else{
      // update time
      let new_time = Date.now();
      let time_passed = new_time - last_recorded_time;
      last_recorded_time = new_time;

      // update logic(t)
      call_all_functions(update_functions,time_passed);
      // update drawings(t)
      call_all_functions(draw_functions);
      // loop
      requestAnimationFrame(main_loop);
    }
}

;
