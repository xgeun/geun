//gnb
$(document).ready(function(){
  var gnb = '#header .gnb'
  var btn = '#header .panelIcon'

  function mGnb(){
      $(btn).click(function(e){
          e.preventDefault();

          $(this).stop().toggleClass('active');
          $(gnb).stop().toggleClass('active');
      });
  }

  $(window).resize(function(){
      $(gnb).add(btn).stop().removeClass('active');

      var w = window.innerWidth; 

      if(w <= 1024){ 
          mGnb(); 
      }
  });

  $(window).trigger('resize');
});



// page
$(document).ready(function(){
  var $portfolio_page = $("#portfolio_page");
  var $swiper_container = $portfolio_page.find(".swiper .swiper-wrapper");

  $('#fullpage').fullpage({
    responsiveWidth: 500,
    onLeave: function(index, nextIndex){
      if(nextIndex == 3){ // 포트폴리오 화면이면
        setSwiperSlideActive(swiper.realIndex);
      } else { // 나머지 화면이면
        setSwiperSlideActive();
      }
    }    
  });

  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: { 
      slideChange: function(el) {
        var getIndex = el.realIndex; // 변경된 인덱스

        setSwiperSlideActive(getIndex);
      }
    }
  });

  // 받은 INDEX의 슬라이드에 ACTIVE 클래스를 추가한다.
  function setSwiperSlideActive(index) {
    $swiper_container.find(".swiper-slide").removeClass("active"); // init
    if (typeof index === "number") {
      swiper && $(swiper.slides[index]).addClass("active");
    }
  }
});