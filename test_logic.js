const windowHeight = 1000;
const OFFSET = 250;

function test(rectTop, rectBottom) {
  let newScale = 0.90;
  let newRadius = 40;

  if (rectTop > OFFSET && rectTop <= windowHeight) {
    const progress = 1 - ((rectTop - OFFSET) / (windowHeight - OFFSET));
    newScale = 0.90 + (0.10 * progress);
    newRadius = 40 - (40 * progress);
    console.log("Entering:", newScale);
  } else if (rectBottom > OFFSET && rectBottom <= windowHeight) {
    const progress = (rectBottom - OFFSET) / (windowHeight - OFFSET);
    newScale = 0.90 + (0.10 * progress);
    newRadius = 40 - (40 * progress);
    console.log("Leaving:", newScale);
  } else if (rectTop <= OFFSET && rectBottom >= windowHeight) {
    newScale = 1;
    newRadius = 0;
    console.log("Middle:", newScale);
  } else {
    newScale = 0.90;
    newRadius = 40;
    console.log("Outside:", newScale);
  }
}

test(100, 2000); // Screenshot 1 (near top, bottom far away) -> expect Middle (1)
test(-500, 1500); // Screenshot 2 (middle of section) -> expect Middle (1)
test(800, 2800); // Just entering -> expect Entering (0.9x)
test(-1500, 500); // Leaving -> expect Leaving (0.9x)
