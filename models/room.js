const Room = function(area, paint_status = false , can_be_painted = true){
  this.area = area;
  this.paint_status = paint_status;
  this.can_be_painted = can_be_painted;
}



module.exports = Room
