const ftoc = function(f) {
  var c = (f - 32) * 5 / 9;
  return Math.round(c * 10) / 10;
}

const ctof = function(c) {
  f = c * 9 / 5 + 32; 
  return Math.round(f * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
