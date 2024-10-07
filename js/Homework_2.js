//! TASK 1

const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const resizeImage = () => {
  const size = sliderInput.value;
  sliderImage.style.width = `${size}%`;
};

sliderInput.addEventListener('input', debounce(resizeImage, 100));

//! TASK 2

const box = document.getElementById('box');

const moveBox = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  box.style.transform = `translate(${x}px, ${y}px)`;
};

const debouncedMoveBox = _.debounce(moveBox, 100);

document.addEventListener('mousemove', debouncedMoveBox);
