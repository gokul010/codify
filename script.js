function myFunction(x) {
    x.classList.toggle("change");
    const mbtn=document.querySelector(".menu");
    mbtn.classList.toggle("change1");
  }
var i=0;
let news=[];
news.unshift("May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday Dharaneesh !");
news.push("23/09/2023 - there is a class on AE and DE,and may be there is a chance of EMF.");
news.push("Intermediate feedback entry is open now");

document.getElementById("news").innerHTML=news[i];
function nextnews(a){
  i=i+a; 
  if (i==news.length){
    i=0;
  }
  else if (i<0){
    i=news.length -1;
  } 
  document.getElementById("news").innerHTML=news[i];
  //setTimeout(nextnews, 5200,1);
}

