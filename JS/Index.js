
/************************/
/**   Hero Animations  **/
/************************/

(function initCircleAnimations() {

  // Sunflower Spiral (perfect SVG + SMIL)
  function setupFibonacciConcentric() {
    const c = document.getElementById("anim");
    if (!c) return;
    c.innerHTML = "";
    const N = 200;
    const SIZE = 2000;
    const DOT_RADIUS = 5;
    const MARGIN = 4;
    const CENTER = SIZE / 2;
    const MAX_RADIUS = CENTER - MARGIN - DOT_RADIUS;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const DURATION = 3;
    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", SIZE);
    svg.setAttribute("height", SIZE);
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);
    c.appendChild(svg);

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_RADIUS;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", DOT_RADIUS);
      circle.setAttribute("fill", "#cc33ff");
      circle.setAttribute("opacity", "0.6");
      svg.appendChild(circle);

      // radius pulse
      const animR = document.createElementNS(svgNS, "animate");
      animR.setAttribute("attributeName", "r");
      animR.setAttribute(
        "values",
        `${DOT_RADIUS * 0.5};${DOT_RADIUS * 1.5};${DOT_RADIUS * 0.5}`
      );
      animR.setAttribute("dur", `${DURATION}s`);
      animR.setAttribute("begin", `${frac * DURATION}s`);
      animR.setAttribute("repeatCount", "indefinite");
      animR.setAttribute("calcMode", "spline");
      animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      circle.appendChild(animR);

      // opacity pulse
      const animO = document.createElementNS(svgNS, "animate");
      animO.setAttribute("attributeName", "opacity");
      animO.setAttribute("values", "0.3;1;0.3");
      animO.setAttribute("dur", `${DURATION}s`);
      animO.setAttribute("begin", `${frac * DURATION}s`);
      animO.setAttribute("repeatCount", "indefinite");
      animO.setAttribute("calcMode", "spline");
      animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      circle.appendChild(animO);
    }
  }

  // Add corner decorations to all animation containers
  function addCornerDecorations() {
    document.querySelectorAll(".animation-container").forEach((container) => {
      // Create corner SVG elements
      const corners = ["top-left", "top-right", "bottom-left", "bottom-right"];

      corners.forEach((position) => {
        const corner = document.createElement("div");
        corner.className = `corner ${position}`;

        // Use the plus symbol SVG
        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svg.setAttribute("width", "16");
        svg.setAttribute("height", "16");
        svg.setAttribute("viewBox", "0 0 512 512");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        // Create plus symbol polygon
        const polygon = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "polygon"
        );
        polygon.setAttribute(
          "points",
          "448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288"
        );
        polygon.setAttribute("fill", "currentColor");

        svg.appendChild(polygon);
        corner.appendChild(svg);
        container.appendChild(corner);
      });
    });
  }

  window.addEventListener("load", () => {
    setupFibonacciConcentric();
    addCornerDecorations(); // Add the corner decorations
  });
})();


/************************/
/****    Carousel    ****/
/************************/



/************************/
/****    ˶^•ﻌ•^˵ฅ    ****/
/************************/
