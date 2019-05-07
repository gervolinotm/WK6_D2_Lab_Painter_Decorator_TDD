const PaintCan = function(litres, check_if_empty = false){
  this.litres = litres;
  this.check_if_empty = check_if_empty;
}

// PaintCan.prototype.update_paint_status = function(){
//   if (this.litres === 0) {
//     this.check_if_empty = true
//   } else {
//     this.check_if_empty = false
//   }
// }

PaintCan.prototype.empty_paint = function(){
  let paint_can = this.litres;
  paint_can = 0;
  return paint_can;
}

module.exports = PaintCan;
