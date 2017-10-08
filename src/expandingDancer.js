var ExpandingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps)
}

ExpandingDancer.prototype = Object.create(Dancer.prototype)
ExpandingDancer.prototype.constructor = ExpandingDancer
ExpandingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randomNumber = Math.floor(Math.random() * (50 - 0 + 1));
  var growDancerObject = {
    'border': randomNumber + 'px solid blue',
    'border-radius': randomNumber + 'px',
  }
  this.$node.css(growDancerObject);
  
}