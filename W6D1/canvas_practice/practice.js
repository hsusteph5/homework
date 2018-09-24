document.addEventListener("DOMContentLoaded", function(){
  const canvasElement = document.getElementById("mycanvas");
  canvasElement.width = 500;
  canvasElement.height = 500;

  const ctx = canvasElement.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 200, 200);
  //
  ctx.beingpath();
  ctx.arc(100, 200, 20, 2*Math.PI, true);
  ctx.strokeStyle('green');
  ctx.stroke();

});
