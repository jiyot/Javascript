// speed linit = 70
//5 -> 1 point
//Math.floor(1.3)
// 12 points -> suspended

console.log(checkSpeed(77));
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    return "OK";
  }
  // instead of else block using return in the  previous condition complets the process

  const point = Math.floor((speed - speedLimit) / kmPerPoint);
  if (point >= 12) {
    return "Suspended";
  } else {
    return point;
  }
}
