(function() {
  var scale = 80;
  var center = Math.random()*360;
  var brightnessStep = Math.random()*30;
  var brightnessStart = Math.random()*30;
  var hueDiff = Math.random()*20;
  var mainColor = "hsl("+center+",100%,"+brightnessStart+"%)",
      secondaryColor = "hsl("+(center+hueDiff)+",100%,"+(brightnessStart+brightnessStep)+"%)",
      contrastColor = "hsl("+(center-hueDiff)+",100%,"+(brightnessStart+2*brightnessStep)+"%)";

  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = scale;
  var gfx = canvas.getContext("2d");
  gfx.fillStyle = secondaryColor;
  gfx.fillRect(0,0,scale,scale);
  gfx.save();
  gfx.translate(scale/2, scale/2);
  gfx.rotate(Math.PI/4);
  var hypot = scale*Math.sqrt(2)/2;
  gfx.fillStyle = mainColor;
  gfx.fillRect(-hypot/2, -hypot/2, hypot, hypot);
  gfx.restore();

  gfx.strokeStyle = contrastColor;
  gfx.beginPath();
  gfx.moveTo(0,0);
  gfx.lineTo(scale,scale);
  gfx.moveTo(0,scale);
  gfx.lineTo(scale,0);
  gfx.stroke();
  var url = canvas.toDataURL()
  document.body.style.backgroundImage = "url("+url+")";
})();

