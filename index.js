var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var bot=this.getAttribute("class");
    switch(bot)
    {
      case "w drum":
      var audio=new Audio("drummy/tom-1.mp3");
      audio.play();
      break;
      case "a drum":
      var audio=new Audio("drummy/tom-2.mp3");
      audio.play();
      break;
      case "s drum":
      var audio=new Audio("drummy/snare.mp3");
      audio.play();
      break;
      case "d drum":
      var audio=new Audio("drummy/kick-bass.mp3");
      audio.play();
      break;
      case "j drum":
      var audio=new Audio("drummy/crash.mp3");
      audio.play();
      break;
      case "k drum":
      var audio=new Audio("drummy/tom-4.mp3");
      audio.play();
      break;
    }
  });
}
