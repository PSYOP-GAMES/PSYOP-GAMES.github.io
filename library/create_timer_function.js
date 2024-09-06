let create_repeating_timer_function =(interval,f)=>{
  console.log('create timer function');
  let time_passed = 0;
  return (t)=>{
    time_passed += t;
    if(time_passed >= interval){
      time_passed -= interval;
      f();
    }
  }
}
console.log('end of create timer function');
let create_one_off_timer_function =(interval,f)=>{
  console.log('create timer function');
  let time_passed = 0;
  let activated = false;
  return (t)=>{
    time_passed += t;
    if(time_passed >= interval){
      if(activated){}
      else{ f();}
    }
  }
}
console.log('end of create timer function');
