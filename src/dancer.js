var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>')
  this.timeBetweenSteps = timeBetweenSteps  
  this.setPosition(top, left)
  this.step()
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps)
}

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = { top: top, left: left }
  this.$node.css(styleSettings)
}