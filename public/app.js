(() => {
  // src/diamond.js
  function calculatePerimeter(diamondSide) {
    return diamondSide * 4;
  }
  function calculateArea(diamondSide, alphaAngle) {
    const rad = alphaAngle * Math.PI / 180;
    return Math.pow(diamondSide, 2) * Math.sin(rad);
  }

  // src/app.js
  doc = {
    diamondSideInput: document.querySelector("#diamondSide"),
    alphaAngleInput: document.querySelector("#alphaAngle"),
    calcButton: document.querySelector("#calcButton"),
    perimeterInput: document.querySelector("#perimeter"),
    areaInput: document.querySelector("#area")
  };
  doc.calcButton.addEventListener("click", () => {
    const diamondSide = doc.diamondSideInput.value;
    const alphaAngle = doc.alphaAngleInput.value;
    const perimeter = calculatePerimeter(diamondSide);
    const area = calculateArea(diamondSide, alphaAngle);
    doc.perimeterInput.value = perimeter;
    doc.areaInput.value = area;
  });
})();
