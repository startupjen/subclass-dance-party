var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps)
}

ColorDancer.prototype = Object.create(Dancer.prototype)
ColorDancer.prototype.constructor = ColorDancer
ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var r = Math.floor(Math.random() * (200 + 1));
  var g = Math.floor(Math.random() * (200 + 1));
  var b = Math.floor(Math.random() * (200 + 1));  
  this.$node.css({color: `rgb(${r},${g},${b})`, border: "10px solid" });
  this.$node.toggle()
}