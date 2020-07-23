document.addEventListener('DOMContentLoaded', init);

function init(){
  let query = window.matchMedia("(min-width: 701px)");

  if(query.matches){
    window.onscroll = function() {scrollFunction()};
  }else {
  }
}


function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("fixed-nav").style.width = "100%";
    document.getElementById("fixed-nav").style.top = "0";
    document.getElementById("logo").style.margin = "0";
    document.getElementById("top-nav").style.top = "-20px";
  } else {
    document.getElementById("fixed-nav").style.width = "110%";
    document.getElementById("fixed-nav").style.top = "20px"
    document.getElementById("logo").style.margin = "0 0 0 -108px";
    document.getElementById("top-nav").style.top = "0";
  }
}