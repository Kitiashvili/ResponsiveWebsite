const slideBox = document.querySelector(".slide-nav");
slideBox.style.top = `calc(50% - ${slideBox.offsetHeight / 2}px)`;

const cogBtn = document.querySelector("#fixed-cog")
.addEventListener('click',function(){
   if(slideBox.offsetLeft == -300){slideBox.style.left = 0;}
   else{slideBox.style.left = "-300px";}
    
})