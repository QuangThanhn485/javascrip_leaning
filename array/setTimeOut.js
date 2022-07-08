
function timer(){
    const date  = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const h = date.getHours();
    const p = date.getMinutes();
    const s = date.getSeconds();
    console.debug(+day +"/"+month+"/"+year+"  "+h+":"+p+":"+s);
}
setTimeout(timer,1000); // 1000 miliSeconds (1 second) active just only one;
setInterval(timer,1000);