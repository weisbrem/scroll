// 3d scroll

let zSpacing = -1000;
let lastPosition = zSpacing / 5;
// try querySelectorAll()
let framesElements = document.getElementsByClassName('frame');
let framesArr = Array.from(framesElements);
let zValues = [];

window.onscroll = () => {
  let top = document.documentElement.scrollTop;
  // hack for movement of frame along z-axis
  let delta = lastPosition - top;

  lastPosition = top;

  framesArr.forEach((item, i) => {
    const opacityValue = Math.abs(zSpacing) / 1.5;
    let transform = `translateZ(${zValues[i]}px)`;
    let opacity = zValues[i] < opacityValue ? 1 : 0;

    zValues.push(i * zSpacing + zSpacing);

    // 5.5 — speed animation
    zValues[i] += delta * -5.5;
    item.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

window.scrollTo(0, 1);
