
window.addEventListener('load', function () {
  document.querySelector('body').classList.add('is-loaded')
  document.querySelector('body').classList.remove('is-loading')
  //gsap.to('.fille-effect-fill', { opacity: 1, duration: 1,})
  gsap.to('.fade', { opacity: 1, x:0, y:0, duration: 1, ease:"power3.out"})
  gsap.to('.shine', { opacity: 1, delay:2, duration: 1,})
  //compteur();
  //seize();
})

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

let isMobile = false; //initiate as false
// device detection

function _isMobile() {
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
  isMobile = true;
  }
}
_isMobile()

if (isMobile) {
  document.querySelector("#pack--isRes").classList.add("res")
}

// Animation

const loader = document.querySelector('.loader');
const text = document.querySelector('.fille-effect-fill-bg');
const home = document.querySelector('.home')
const delay = 1200;
let timeout;

// function removing or adding (after a delay) a class of active

function toggleActive() {
  text.classList.add('active');

  timeout = setTimeout(() => {
    loader.classList.add('active');
    home.classList.add('animeIn');
    animation()
    document.querySelector('body').classList.add('scroll')
    document.querySelector('main').classList.add('show')
    timeout = null;
  }, delay);
}

// function removing the existing, if any, timeout
// this is made necessary in a situation where the press is removed before the timeout has run out
function removeActive() {
  if (timeout) {
    text.classList.remove('active');
    clearTimeout(timeout);
  }
}

// handle presses through the mouse cursor
// ! to replicate the spacebar, a few more lines of JS are necessary
loader.addEventListener('mousedown', () => toggleActive());
loader.addEventListener('mouseup', () => removeActive());
loader.addEventListener('touchstart', () => toggleActive());
loader.addEventListener('touchend', () => removeActive());

function animation () {
  gsap.to('.home .img--warpper', {scale: 1, rotation: 0, y:0, duration: 1.5, delay: 1, ease:"power4.inOut"})
  gsap.to('.letter', { duration: 2.5, y: 0, delay: 0.5, stagger: 0.05,  ease: "power4.inOut"})
  gsap.to('nav span', {y: 0, duration: 0.5, ease:"slow (0.3, 0.7, false)", delay: 1.8, stagger: 0.1})
  gsap.to('.loader', {display: "none", delay: 1})
}

function seize() {
  const h = window.innerHeight;
  const w = window.innerWidth;

  if (w < h) {
    const r  = document.getElementById('pack--isRes')
    r.classList.add('res');
    const e = document.querySelector('.instagram')
    e.classList.remove('row')
    e.classList.add('column')
    const b = document.querySelector('body')
    b.classList.add('res')
  }
}

// Name 
let textWrapper = document.querySelector('.home__name .home__name--letters');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



function presetsOpen() {
  let elm = document.getElementById('pack__reaval'),
      close = document.getElementById('close--presets'),
      image = document.getElementById('pack__img')
      imageRes = document.getElementById('pack__img--res')
  
  elm.classList.add('active');
  image.classList.add('active');
  imageRes.classList.add('active');

  setTimeout(function () {
    elm.classList.add('reaval');
    close.classList.add('reaval');
  },750)

}

function presetsClose() {
  let elm = document.getElementById('pack__reaval'),
      close = document.getElementById('close--presets'),
      image = document.getElementById('pack__img')
      imageRes = document.getElementById('pack__img--res')

  elm.classList.add('close');
  image.classList.add('close');
  imageRes.classList.add('close');
  close.classList.add('close');
  
  setTimeout(function () {
    elm.classList.remove('active');
    image.classList.remove('active');
    imageRes.classList.remove('active');
    elm.classList.remove('close');
    image.classList.remove('close');
    imageRes.classList.remove('close');
    close.classList.remove('close');
    elm.classList.remove('reaval');
    close.classList.remove('reaval');
  },1000)
}

let observer = new IntersectionObserver(function (observables) {
  observables.forEach(function (observable) {
    // L'élément devient visible
    if (observable.intersectionRatio > 0.5) {
      observable.target.classList.add('reveal--visible')
      observer.unobserve(observable.target)
    }
  })
}, {
  threshold: [0.5]
});

// On observe nos éléments
let items = document.querySelectorAll('.reveal')
items.forEach(function (item) {
  observer.observe(item)
})


// Caroucel

{

  function styleCarousel() {

    let carousel = document.querySelector('.carousel__cell');
    let cells = document.querySelectorAll('.cell');

    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      value = 52,
      valueMobile = 120,
      valueImg = 60,
      result = (x*value)/100;
      resultMobile = (x*valueMobile)/100;
      resultImg = (x*valueImg)/100;

    if (!isMobile) {
      carousel.style.transform = 'translateZ(' + -result + 'px)';
    } else {
      carousel.style.transform = 'translateZ(' + -resultMobile + 'px)';
    }

    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      deg = i*60;

      cell.style.transform = 'scaleX(-1) rotateY(' + deg + 'deg) translateZ(' + -resultImg + 'px)';
    }
  }

styleCarousel()

  var carousel = document.querySelector('.carousel__cell');
  var cellCount = 6;
  var selectedIndex = 0;

  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      result = (x*52)/100;
      resultMobile = (x*120)/100;

  function rotateCarousel() {
    var angle = selectedIndex / cellCount * -360;
    if (!isMobile) {
      carousel.style.transform = 'translateZ(' + -result + 'px) rotateY(' + angle + 'deg)';
    }else {
      carousel.style.transform = 'translateZ(' + -resultMobile + 'px) rotateY(' + angle + 'deg)';
    }
  }

  if (isMobile) {
    const prevButton = document.querySelector('.buttons--left');
  prevButton.addEventListener( 'touchstart', function() {
    selectedIndex--;
    rotateCarousel();
  });
  
  const nextButton = document.querySelector('.buttons--right');
  nextButton.addEventListener( 'touchstart', function() {
    selectedIndex++;
    rotateCarousel();
  });
  } else {
    let prevButton = document.querySelector('.buttons--left');
  prevButton.addEventListener( 'click', function() {
    selectedIndex--;
    rotateCarousel();
  });
  
  let nextButton = document.querySelector('.buttons--right');
  nextButton.addEventListener( 'click', function() {
    selectedIndex++;
    rotateCarousel();
  });
  }

}

// Smooth scroll

if (!isMobile) {
  {
  let html = document.documentElement;
  let body = document.body;

  body.classList.add('scroll-y')

  let scroller = {
      target: document.querySelector(".smooth-scroll"),
      parallax: document.querySelectorAll('.parallax1'),
      parallaxInvert: document.querySelectorAll('.parallaxInvert'),
      ease: 0.07, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
  }; 

  let requestId = null;

  TweenLite.set(scroller.target, {
      force3D: true
  });

  window.addEventListener("load", onLoad);

  function onLoad() {    
      updateScroller();  
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("wheel", onScroll); 
  }

  function updateScroller() {

    let resized = scroller.resizeRequest > 0;
        
    if (resized) {    
        let height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
    }
            
    let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
    }
        
    TweenLite.set(scroller.target, { 
        y: -scroller.y
    });

    TweenLite.set(scroller.parallax, { 
      y: -scroller.y / 10
  });

    TweenLite.set(scroller.parallaxInvert, { 
      y: scroller.y / 4 - 1000
  });
        
    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }

  function onScroll() {
  scroller.scrollRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
  }

  function onResize() {
  scroller.resizeRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
  }
  }
}else {
  window.addEventListener('scroll', function () {
      document.getElementById('parallax1').style.transform = `translate3D(0, ${ window.scrollY * -0.25}px, 0)`;
      document.getElementById('parallax2').style.transform = `translate3D(0, ${ window.scrollY * 0.25 - 250}px, 0)`;
  });
}

function alert() {
  if (isMobile) {
    document.querySelector(".alert").classList.add("rev")
  }
}
function alertClose() {
  document.querySelector(".alert").classList.remove("rev")
}