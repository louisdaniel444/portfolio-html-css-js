let pseudo ="Da";
 pseudo += " whouaf";
 //console.log(pseudo);

 const age =53;
 //console.log(age);

direBonjour(pseudo,age);
 

function direBonjour(pseudo,age){
  const ageLimite=18; 
  if(age>=ageLimite){
   console.log("salut à toi " +pseudo+" tu as "+age);
}else{
  console.log("tu n,as pas l,age requis");
}
 }

