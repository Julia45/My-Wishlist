function multiItemSlider (selector, config) {
    let mainElement = document.querySelector(selector)
    let sliderWrapper = mainElement.querySelector('.slider__wrapper')
    let sliderItems = mainElement.querySelectorAll('.slider__item') 
    let wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width)
    let  itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width)  
    let  positionLeftItem = 0
    let  transform = 0
    let  step = itemWidth / wrapperWidth * 100
    let  items = []
    let  interval = 0;
    let  isCycling = config
    let  direction ='right'

    sliderItems.forEach(function (item, index) {
      items.push({ item: item, position: index, transform: 0 });
    });

    let position = {
      getItemMin: function () {
        let indexItem = 0;
        items.forEach(function (item, index) {
          if (item.position < items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function () {
        let indexItem = 0;
        items.forEach(function (item, index) {
          if (item.position > items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function () {
        return items[position.getItemMin()].position;
      },
      getMax: function () {
        return items[position.getItemMax()].position;
      }
    }

    let transformItem = function (direction) {
      let nextItem;
      if (direction === 'right') {
        positionLeftItem++;
        if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          items[nextItem].position = position.getMax() + 1;
          items[nextItem].transform += items.length * 100;
          items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
        }
        transform -= step;
      }
      sliderWrapper.style.transform = 'translateX(' + transform + '%)';
    }

    let cycle = function (direction) {
      if (!isCycling) {
        return;
      }
      interval = setInterval(function () {
        transformItem(direction);
      }, 2000);
    }

    cycle(direction);

    return {
      right: function () { 
        transformItem('right');
      },
      cycle: function () { 
        isCycling = true;
        clearInterval(interval);
        cycle();
      }
    }
  }

multiItemSlider('.slider', { isCycling: true})