const 
  slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot');

let index = 0; // текущий активный слайд

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove('slide_active');
  }
  slides[n].classList.add('slide_active');
};
const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};
const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});