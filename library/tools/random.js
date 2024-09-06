// random(3) => 1|2|3
// random([1,2,3]) => 1|2|3
let random =(n)=>{
    let this_is_an_array =v=> Array.isArray(v);
    if(Array.isArray(n)){
        let l = n;
        return l[random(l.length)-1];
    }
    else {return (Math.floor(Math.random()*n))+1};
}
