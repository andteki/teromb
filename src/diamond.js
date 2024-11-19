
function calculatePerimeter(diamondSide) {
  return diamondSide * 4;
}

function calculateArea(diamondSide, alphaAngle) {
  const rad = (alphaAngle * Math.PI) / 180;
  return Math.pow(diamondSide, 2) * Math.sin(rad);
}

export { calculatePerimeter, calculateArea };
