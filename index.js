// 3d scroll

let zSpacing = -1000;
let lastPosition = zSpacing / 5;
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

// Audio
const soundBtn = document.querySelector('.footer__soundbtn');
const audioSource = document.querySelector('.footer__audio');

soundBtn.addEventListener('click', () => {
  soundBtn.classList.toggle('footer__soundbtn--paused');

  audioSource.paused ? audioSource.play() : audioSource.pause();
});

window.onfocus = () => {
  soundBtn.classList.contains('footer__soundbtn--paused')
    ? audioSource.pause()
    : audioSource.play();
};

window.onblur = () => {
  audioSource.pause();
};
