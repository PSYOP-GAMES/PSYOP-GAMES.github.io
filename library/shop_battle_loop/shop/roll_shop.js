let deck = [
 {em:'🪂',hp:1,dmg:1},
 {em:'🛰️',hp:1,dmg:3},
 {em:'🚢',hp:3,dmg:1},
 ];

let shop_merch =[];
let repeat=(n,f)=>{
  if(n<=0){ return }
  else{
    f();
    repeat(n-1,f)}}

let reroll_cost = 25;

let roll_shop =(cost)=>{
  cost = cost===undefined? reroll_cost :cost;
  if(the_player.gold < cost){
    // draw not enough gold warning
    return;
  }
  the_player.gold -= cost;
  shop_merch =[];
  repeat(5,()=> { 
    shop_merch.push(random(deck));});
  console.log(shop_merch);
  }

let reroll = roll_shop;
let reroll_shop = roll_shop;
