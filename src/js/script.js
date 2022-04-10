"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const sliderItems = document.querySelectorAll('.slider_item');
    const tabs = document.querySelectorAll('.tabs_item');
    const tabsParent = document.querySelector('.tabs_list');
    const leftBtn = document.querySelector('.slider_left');
    const rightBtn = document.querySelector('.slider_right');
    const slideTotal = document.querySelector('.slider_total');
    let numSli = document.querySelector('.slider_num');
    let num = 3;
   

    slideTotal.innerHTML = `/ ${sliderItems.length}`;

    let timerSlide = setInterval (() => {
        moveRight();
        hideSliderContent();
        showSlideContent(num);
    }, 5000);

    function hideSliderContent() {
        sliderItems.forEach( slider => {
            slider.style.display = 'none';
        });

        tabs.forEach( tab => {
            tab.classList.remove('active');
        });
    }
    

    function showSlideContent (i = num) {
        sliderItems[i].style.display = "flex";
        tabs[i].classList.add('active');
    }

    hideSliderContent();
    showSlideContent();


    tabsParent.addEventListener('click', (e) => {
        let target = e.target.closest('.tabs_item');
        
        if (target && target.classList.contains('tabs_item')) {
            tabs.forEach( (item, i) => {
                if (target == item) {
                    hideSliderContent();
                    showSlideContent(i);
                    num = i;
                }
            }); 
        }
    });

    leftBtn.addEventListener('click', moveLeft);
    rightBtn.addEventListener('click', moveRight);

    function moveLeft () {
        if (num > 0) {
            sliderItems[num].style.display = "none";
            sliderItems[--num].style.display = "flex";
            
        } else {
            sliderItems[num].style.display = "none";
            num = 3;
            sliderItems[num].style.display = "flex";
        }
        numSli.innerHTML = `${num + 1}`;
    }

    function moveRight () {
        if (num < 3) {
            sliderItems[num].style.display = "none";
            sliderItems[++num].style.display = "flex";
        } else {
            sliderItems[num].style.display = "none";
            num = 0;
            sliderItems[num].style.display = "flex";
        }
        
        numSli.innerHTML = `${num + 1}`;
    }

    
    
});


