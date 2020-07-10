'use strict';

window.addEventListener('DOMContentLoaded', () => {

  //slider
  const slider = () => {
    const slide = document.querySelectorAll('.content__slider-item'),
    dots = document.querySelector('.content__slider-dots'),
    slider = document.querySelector('.content__slider');

    for (let i = 0; i < slide.length; i++) {
      dots.insertAdjacentHTML('beforeend',
        `<li class="dot ${i === 0 ? 'dot-active' : ''}"></li>`);
    }

    const dot = document.querySelectorAll('.dot');

    let currentSlide = 0,
    interval;

    const prevSlide = (elem, i, strClass) => {
      elem[i].classList.remove(strClass);
    };

    const nextSlide = (elem, i, strClass) => {
      elem[i].classList.add(strClass);
    };

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'content__slider-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'content__slider-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};

		slider.addEventListener('click', event => {
			event.preventDefault();

			const target = event.target;

			if (!target.matches('.dot')) {
				return;
			} else {
        dot.forEach((elem, i) => {
					if (elem === target) {
						currentSlide = i;
					}
				});
      }

			prevSlide(slide, currentSlide, 'content__slider-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			} else if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}

			nextSlide(slide, currentSlide, 'content__slider-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		});

		startSlide();

  };

  slider();
});